#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
天氣 API 模組
使用 Open-Meteo API 獲取澎湖天氣預報
"""

import urllib.request
import json
from datetime import datetime, timedelta

# 澎湖座標
PENGHU_LAT = 23.5711
PENGHU_LON = 119.5792

def get_weather_forecast(days=4):
    """
    獲取澎湖未來 N 天的天氣預報
    
    Args:
        days: 天數，預設為 4 天
    
    Returns:
        list: 天氣預報數據列表
    """
    try:
        # Open-Meteo API URL
        url = (
            f"https://api.open-meteo.com/v1/forecast?"
            f"latitude={PENGHU_LAT}&longitude={PENGHU_LON}"
            f"&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code"
            f"&timezone=Asia/Taipei"
            f"&forecast_days={days}"
        )
        
        # 發送請求
        with urllib.request.urlopen(url, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
        
        # 解析數據
        daily = data.get('daily', {})
        dates = daily.get('time', [])
        temp_max = daily.get('temperature_2m_max', [])
        temp_min = daily.get('temperature_2m_min', [])
        rain_prob = daily.get('precipitation_probability_max', [])
        weather_codes = daily.get('weather_code', [])
        
        # 格式化結果
        forecast = []
        weekdays = ['一', '二', '三', '四', '五', '六', '日']
        
        for i in range(min(days, len(dates))):
            date_obj = datetime.strptime(dates[i], '%Y-%m-%d')
            month_day = date_obj.strftime('%#m/%#d')  # Windows 使用 %#m/%#d
            weekday = weekdays[date_obj.weekday()]
            
            # 計算平均溫度
            avg_temp = round((temp_max[i] + temp_min[i]) / 2)
            
            # 轉換天氣代碼為描述
            weather_desc = get_weather_description(weather_codes[i])
            
            forecast.append({
                'date': f"{month_day} ({weekday})",
                'temp': avg_temp,
                'desc': weather_desc,
                'rainChance': rain_prob[i] if rain_prob[i] is not None else 0,
                'weatherCode': weather_codes[i]
            })
        
        return forecast
    
    except Exception as e:
        print(f"獲取天氣數據失敗: {e}")
        # 返回預設數據
        return get_fallback_weather()

def get_weather_description(code):
    """
    根據 WMO 天氣代碼轉換為中文描述
    
    Args:
        code: WMO 天氣代碼
    
    Returns:
        str: 天氣描述
    """
    weather_map = {
        0: '晴朗',
        1: '大致晴朗',
        2: '多雲',
        3: '陰天',
        45: '霧',
        48: '霧',
        51: '小雨',
        53: '中雨',
        55: '大雨',
        61: '小雨',
        63: '中雨',
        65: '大雨',
        71: '小雪',
        73: '中雪',
        75: '大雪',
        77: '雪',
        80: '陣雨',
        81: '陣雨',
        82: '大陣雨',
        85: '陣雪',
        86: '陣雪',
        95: '雷陣雨',
        96: '雷陣雨',
        99: '強雷陣雨'
    }
    return weather_map.get(code, '多雲')

def get_fallback_weather():
    """
    當 API 失敗時的備用天氣數據
    
    Returns:
        list: 預設天氣數據
    """
    today = datetime.now()
    weekdays = ['一', '二', '三', '四', '五', '六', '日']
    
    fallback = []
    for i in range(4):
        date_obj = today + timedelta(days=i)
        month_day = date_obj.strftime('%#m/%#d')
        weekday = weekdays[date_obj.weekday()]
        
        fallback.append({
            'date': f"{month_day} ({weekday})",
            'temp': 26,
            'desc': '多雲',
            'rainChance': 30,
            'weatherCode': 2
        })
    
    return fallback

if __name__ == '__main__':
    # 測試用
    forecast = get_weather_forecast()
    print(json.dumps(forecast, ensure_ascii=False, indent=2))

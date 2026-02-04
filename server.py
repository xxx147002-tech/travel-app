#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import http.server
import socketserver
import os
import json
from urllib.parse import urlparse, parse_qs
from weather_api import get_weather_forecast

PORT = 8080

class WeatherRequestHandler(http.server.SimpleHTTPRequestHandler):
    """自定義請求處理器，支援 API 端點"""
    
    def do_GET(self):
        # 解析 URL
        parsed_path = urlparse(self.path)
        
        # API 端點：/api/weather
        if parsed_path.path == '/api/weather':
            self.handle_weather_api()
        else:
            # 其他請求使用預設的靜態文件處理
            super().do_GET()
    
    def handle_weather_api(self):
        """處理天氣 API 請求"""
        try:
            # 獲取天氣數據
            weather_data = get_weather_forecast(days=4)
            
            # 回傳 JSON
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            response = {
                'success': True,
                'data': weather_data
            }
            self.wfile.write(json.dumps(response, ensure_ascii=False).encode('utf-8'))
            
        except Exception as e:
            # 錯誤處理
            self.send_response(500)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            
            error_response = {
                'success': False,
                'error': str(e)
            }
            self.wfile.write(json.dumps(error_response, ensure_ascii=False).encode('utf-8'))
    
    def log_message(self, format, *args):
        """自定義日誌輸出"""
        print(f"[{self.log_date_time_string()}] {format % args}")

# 切換到腳本目錄
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# 啟動伺服器
with socketserver.TCPServer(("", PORT), WeatherRequestHandler) as httpd:
    print(f"Server running at http://0.0.0.0:{PORT}/")
    print(f"Access from your phone at: http://192.168.100.87:{PORT}/")
    print(f"Weather API: http://localhost:{PORT}/api/weather")
    httpd.serve_forever()

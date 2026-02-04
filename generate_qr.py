#!/usr/bin/env python3
import qrcode
import socket

def get_local_ip():
    """Get the local IP address"""
    try:
        # Create a socket to get the local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "192.168.100.87"  # Fallback to the known IP

def generate_qr_code():
    """Generate QR code for the travel app"""
    PORT = 8080
    ip = get_local_ip()
    url = f"http://{ip}:{PORT}/"
    
    # Create QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    
    # Create an image
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Save the QR code
    filename = "travel_app_qr.png"
    img.save(filename)
    
    print("=" * 60)
    print(f"✅ QR Code generated successfully!")
    print(f"📱 Scan this QR code to access your Travel App")
    print(f"🌐 URL: {url}")
    print(f"💾 QR Code saved as: {filename}")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Run 'start-server.bat' to start the server")
    print("2. Open 'travel_app_qr.png' to see the QR code")
    print("3. Scan the QR code with your phone")
    print("=" * 60)
    
    return url

if __name__ == "__main__":
    try:
        generate_qr_code()
    except ImportError:
        print("❌ Error: 'qrcode' module not found")
        print("📦 Installing required packages...")
        import subprocess
        subprocess.check_call(["pip", "install", "qrcode[pil]"])
        print("✅ Installation complete! Running again...")
        generate_qr_code()

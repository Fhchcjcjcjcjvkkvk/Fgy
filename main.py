from cryptography.fernet import Fernet

# Generate a key and encrypt a message
key = Fernet.generate_key()
cipher = Fernet(key)
encrypted = cipher.encrypt(b"Hello, Render!")
print(encrypted)

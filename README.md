# Blockchain-based Attendance System

## 📌 Project Title
**Blockchain-based Attendance System**

## 📖 Project Description
This project is a decentralized attendance management system built on the Ethereum blockchain. It allows students to mark their attendance securely and immutably using smart contracts. With blockchain’s transparency and security, the system ensures authenticity, eliminates tampering, and simplifies verification.

## 🎯 Project Vision
The vision behind this project is to modernize the traditional attendance tracking method by making it:
- Secure and tamper-proof
- Transparent for both students and administrators
- Efficient and less dependent on manual tracking

By leveraging blockchain, we aim to bring a reliable and scalable solution to academic and organizational environments.

## ⭐ Key Features
- ✅ **Immutable Records**: Once a student marks their attendance, it cannot be changed or faked.
- ✅ **One-Time Marking**: A student can only mark their attendance once per session.
- ✅ **Transparent Checking**: Anyone can verify whether a student has marked attendance or not.
- ✅ **Admin Initialization**: The contract deployer is automatically the admin.

## 🚀 Future Scope
- 🏫 **Support for Multiple Classes/Sessions**: Introduce session IDs or dates to track attendance across multiple days.
- 🧑‍🏫 **Role-Based Permissions**: Add functionality to allow only teachers/admins to start or end attendance sessions.
- 📅 **Time-bound Attendance**: Allow attendance marking only within a specified time frame.
- 🔗 **DApp Integration**: Build a frontend DApp with Metamask for seamless interaction.
- 📊 **Analytics Dashboard**: Generate attendance reports and visual analytics on-chain or off-chain.

---

### 🔧 How to Deploy & Use
1. **Deploy** the contract using Remix or Truffle.
2. Students can call `markAttendance()` to mark themselves present.
3. Anyone can call `checkAttendance(address)` to verify if a student has marked their attendance.

---

### 📜 License
This project is licensed under the **MIT License**.
contract address:0x85995812b88F2948A14f7F3b4F03c42773454007
![Screenshot (1) - Copy](https://github.com/user-attachments/assets/2e9f23fe-e011-412b-a3f6-7c1df6153f21)

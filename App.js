// app.js

// Ensure Web3 is injected (MetaMask)
if (typeof window.ethereum !== 'undefined') {
    window.web3 = new Web3(window.ethereum);
    console.log("✅ MetaMask is installed!");
} else {
    alert("❌ Please install MetaMask to use this dApp.");
}

// Replace this with your deployed contract address
const contractAddress = "<YOUR_CONTRACT_ADDRESS_HERE>";

// ABI for AttendanceSystem contract
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "markAttendance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "student", "type": "address" }
        ],
        "name": "checkAttendance",
        "outputs": [
            { "internalType": "bool", "name": "", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "student",
                "type": "address"
            }
        ],
        "name": "AttendanceMarked",
        "type": "event"
    }
];

// Create contract instance
const attendanceContract = new web3.eth.Contract(contractABI, contractAddress);

// Connect wallet
async function connectWallet() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

// Function to mark attendance
async function markAttendance() {
    const account = await connectWallet();
    try {
        await attendanceContract.methods.markAttendance().send({ from: account });
        alert("✅ Attendance marked successfully!");
    } catch (err) {
        console.error(err);
        alert("❌ Failed to mark attendance.");
    }
}

// Function to check attendance for the connected account
async function checkMyAttendance() {
    const account = await connectWallet();
    try {
        const hasMarked = await attendanceContract.methods.checkAttendance(account).call();
        alert(hasMarked ? "✅ You have already marked attendance." : "❌ You have not marked attendance yet.");
    } catch (err) {
        console.error(err);
        alert("❌ Could not fetch attendance status.");
    }
}

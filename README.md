# **BlockSafe: Decentralized Data Framework (DDF)**

BlockSafe is an innovative **Decentralized Data Framework** designed to securely store, share, and manage sensitive data using blockchain technology. It empowers organizations to build decentralized applications (dApps) with robust security, privacy, and transparency. Our first application built on BlockSafe is a **Medical Record System**, ensuring privacy, security, and seamless accessibility of medical data for patients, healthcare providers, and insurers.

---

## 🚀 **Key Features**

- **Decentralized Architecture**: Eliminates single points of failure, enhancing data availability and security.
- **Data Transparency**: Immutable records for full traceability and auditability.
- **Cryptographic Security**: Ensures data integrity and access control through advanced encryption mechanisms.
- **Customizable Framework**: Adaptable to various use cases, including:
  - Medical Records Management
  - Voting Systems
  - Supply Chain Tracking
  - Certificate Verification

---

---

## 🛠️ **Tech Stack**

| **Layer**              | **Tools/Technologies** | **Logo**                                                                                                                   |
| ---------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Blockchain**         | Ethereum               | <img src="/Block Safe/imgs/ethereum.svg" height="60" alt="Ethereum logo" />                                                |
| **Smart Contracts**    | Solidity               | <img src="/Block Safe/imgs//Solidity-Logo.wine.png" height="60" alt="Solidity logo" />                                     |
| **Data Storage**       | IPFS (via Pinata)      | <img src="/Block Safe/imgs//Pinata.jpeg" height="60" alt="Pinata logo" />                                                  |
| **Backend**            | Node.js (Express)      | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="60" alt="Node.js logo" /> |
| **Frontend**           | React + Web3.js        | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="60" alt="React logo" />     |
| **Wallet Integration** | MetaMask               | <img src="/Block Safe/imgs//metamask-colored.svg" height="60" alt="MetaMask logo" />                                       |
| **Authentication**     | Appwrite               | <img src="/Block Safe/imgs//appwrite.webp" height="60" alt="Appwrite logo" />                                              |
| **Development Tools**  | Hardhat, Remix IDE     | <img src="/Block Safe/imgs//remix-logo-icon.png" height="60" alt="Remix-IDE logo" />                                       |

---

## 🔍 **How It Works**

1. **Data Submission**: Sensitive data (e.g., medical records) is encrypted and stored off-chain using **IPFS via Pinata**.
2. **Blockchain Logging**: The hash of the stored data is securely logged on the Ethereum blockchain, ensuring data integrity and transparency.
3. **Access Control**: Patients, as data owners, manage access to their records through their wallets, granting/revoking permissions to entities like hospitals or insurers.
4. **Transparency & Traceability**: All access requests and transactions are recorded immutably on the blockchain, providing complete traceability.

---

## 🏥 **Medical Record System (Use Case)**

### **Overview**

The **Medical Record System** is a decentralized application (dApp) built on BlockSafe to securely manage and share medical records.

- **Patients** control their records through decentralized identity and wallet integration.
- **Hospitals** upload records, which are encrypted and stored on IPFS.
- **Access permissions** are securely managed and logged on the blockchain, ensuring compliance with data privacy regulations.

---

Here’s a more organized and symmetric table for the screenshots:

---

## 📸 **Visual Overview**

| **Application UI**                                                                                                             | **IPFS (Pinata)**                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| <img width="673" alt="Application UI" src="https://github.com/user-attachments/assets/adec158a-81e6-4165-8719-f9c2794fa261" /> | <img width="896" alt="IPFS Pinata" src="https://github.com/user-attachments/assets/6967d220-576b-4ecd-9c21-159f694f44f0" /> |
| <img width="658" alt="Application UI" src="https://github.com/user-attachments/assets/88215896-32b7-477d-a8e0-63d4b88bda7a" /> | <img width="776" alt="Appwrite" src="https://github.com/user-attachments/assets/576f5e47-c407-4a77-b64e-8fcf21c3fb1e" />    |
| <img width="728" alt="Application UI" src="https://github.com/user-attachments/assets/0915f0b9-fec6-421e-8a16-07de57396bf0" /> | <img alt="Ganache" src="https://github.com/user-attachments/assets/9936231d-60a1-4a71-86a3-c440f02579bd" />                 |

| **Git Graph - Contributions**                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------- |
| <img width="692" alt="Git Graph" src="https://github.com/user-attachments/assets/eba86b23-1dd0-4fb1-a367-2be16ba4c3b0" /> |

---

## ⚙️ **Setup Instructions**

### **Prerequisites**

- [Node.js](https://nodejs.org/) installed
- [MetaMask](https://metamask.io/) wallet
- Ethereum development environment (e.g., [Hardhat](https://hardhat.org/))

### **Environment Variables**

Create a `.env` file in the project root and add the following environment variables:

```plaintext
VITE_APPWRITE_URL="your-appwrite-url"
VITE_APPWRITE_PROJECT_ID="your-appwrite-project-id"
VITE_APPWRITE_DB_ID="your-appwrite-database-id"
VITE_APPWRITE_COLLECTION_ID="your-appwrite-collection-id"
VITE_APPWRITE_BUCKET_ID="your-appwrite-bucket-id"
VITE_PINATA_SECRET="your-pinata-secret-key"
VITE_API_KEY="your-api-key"
```

### **Run the Project**

```bash
npm install
npm run dev
```

This will start the development server locally.

---

## 🤝 **Contributing**

We welcome contributions to enhance the functionality and features of BlockSafe. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

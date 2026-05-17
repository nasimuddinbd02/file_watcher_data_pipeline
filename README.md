# File Watcher Data Pipeline

An enterprise-grade NestJS solution for automated file ingestion, data validation, and resilient persistence, coupled with a secured RESTful API for data management.

## 🚀 Overview

This project is designed to handle the ingestion of large, complex JSON batch files exported from legacy hospital systems. It consists of two concurrently running applications:

1. **Background File Watcher (`watcher.main.ts`)**: Actively monitors a designated directory for incoming `.json` files. Upon detection, it parses the data, strictly validates and normalizes the payload using Zod, and persists it to a database using Prisma.
2. **RESTful API (`main.ts`)**: Provides secured access to the ingested data (Appointments, Patients, Clients, Departments, etc.) to allow for querying and manual corrections.

## ✨ Key Features

* **Automated & Resilient File Ingestion**: Built on `chokidar`, the watcher handles Windows-specific file-locking mechanisms and safely moves files to `/processed` or `/invalid` directories upon completion.
* **Robust Schema Validation (Zod)**: Capable of handling highly inconsistent data sets. The validation engine normalizes inconsistent TitleCase keys to lowercase domain models, coerces string-encoded numbers, and safely handles `nullish` properties.
* **Database Locking Resilience**: The Prisma ORM layer is enhanced with connection retry mechanisms to smoothly handle SQLite file locks that occur during massive batch upserts.
* **BigInt Support**: The database schema is equipped with `BigInt` to handle large numeric identifiers and timestamps that exceed standard 32-bit limits without overflow.
* **Comprehensive REST API**: Exposes the fully normalized database via standard REST endpoints.
* **Security First**: 
  * Configured with **Helmet** and **CORS**.
  * Secured via **Passport.js (JWT)** authentication.
  * A default admin account (`admin` / `admin`) is automatically seeded on startup.
* **Audit & Diagnostics**: Detailed logging of processing events (`FileProcessingRecord`) and lifecycle audits of the data (`AppointmentStatusAudit`).

## 🛠 Tech Stack

* **Framework**: NestJS (v11)
* **ORM**: Prisma Client
* **Database**: SQLite (Local)
* **Validation**: Zod + Class Validator
* **Authentication**: Passport-JWT
* **Testing**: Jest

## 📁 Project Structure

```text
file_watcher_data_pipeline/
├── src/
│   ├── main.ts                 # REST API Bootstrap
│   ├── watcher.main.ts         # Background Watcher Bootstrap
│   ├── api/                    # REST API Controllers & Services
│   ├── config/                 # Application Configuration
│   ├── domain/schemas/         # Zod schemas (Data normalization)
│   ├── providers/              # FileWatcher, Logger mechanisms
│   ├── services/               # ParserService, IngestionService
│   └── prisma/                 # Prisma connection & retry logic
├── prisma/
│   └── schema.prisma           # Database definitions
├── test/                       # Jest unit and integration tests
├── watch/                      # Target folder for ingestion
│   ├── processed/              # Successfully ingested files
│   └── invalid/                # Failed files
└── data/                       # SQLite database file storage
```

## ⚙️ Getting Started

### 1. Installation

Install the project dependencies:
```bash
npm install
```

### 2. Environment Setup

An `.env` file should be present in the root directory. Key variables:
```env
WATCH_DIR=./watch
DB_FILE_PATH=./data/appointments.db
ALLOWED_EXTENSION=.json
POLL_INTERVAL_MS=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1d
```

### 3. Database Migration

Synchronize the Prisma schema with the SQLite database:
```bash
npx prisma db push
```

### 4. Running the Application

You can run both the API and the Watcher concurrently using the following command:
```bash
npm start
```

Alternatively, you can run them individually:
* **API Only**: `npm run start:api`
* **Watcher Only**: `npm run start:watcher`

### 5. API Documentation (Swagger)

Once the API is running, the Swagger UI is available at:
👉 **[http://localhost:3000/api/docs](http://localhost:3000/api/docs)**

## 🧪 Testing

Run the automated Jest test suite to verify the logic of the `ParserService`, validation schemas, and REST controllers:

```bash
npm test
```

## 📈 Ingestion Workflow

1. Drop a JSON file (e.g., `Appointment.json`) into the `./watch` directory.
2. The Background Watcher detects the new file and attempts to rename/lock it.
3. The file contents are read and passed to the `ParserService`.
4. `Zod` validates, coerces, and normalizes the payload.
5. `IngestionService` iterates over the data and executes Prisma `upsert` queries.
6. Upon success, the file is moved to `./watch/processed`. On failure, it is moved to `./watch/invalid` and a log is written.

# E-Learning Platform

A modern e-learning platform built with Next.js and NestJS, featuring a monorepo architecture for efficient development and code sharing.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Backend**: NestJS
- **Package Manager**: pnpm
- **Type Safety**: TypeScript
- **Validation**: Zod
- **Database**: (To be added)
- **Authentication**: (To be added)

## 📁 Project Structure

```
elearning/
├── apps/
│   ├── api/           # NestJS backend application
│   └── web/           # Next.js frontend application
├── packages/
│   └── shared-types/  # Shared TypeScript types and schemas
```

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later)
- pnpm (v8 or later)
- Git

## 🏗️ Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd elearning
```

2. Install dependencies:

```bash
pnpm install
```

3. Build shared types package:

```bash
pnpm --filter @elearning/shared-types build
```

## 🚀 Development

### Starting the Development Servers

1. Start the frontend (Next.js):

```bash
pnpm dev:web
```

Frontend will be available at: http://localhost:3000

2. Start the backend (NestJS):

```bash
pnpm dev:api
```

Backend will be available at: http://localhost:3001

### Working with Shared Types

The project uses a shared types package to maintain type consistency between frontend and backend.

1. Adding new types:

   - Create new types in `packages/shared-types/src/`
   - Export them in `packages/shared-types/src/index.ts`
   - Build the package:

   ```bash
   pnpm --filter @elearning/shared-types build
   ```

2. Using shared types in your code:

```typescript
import { User, UserSchema } from "@elearning/shared-types";
```

### Type Validation

The project uses Zod for runtime type validation:

```typescript
const result = UserSchema.safeParse(data);
if (!result.success) {
  console.error("Validation failed:", result.error);
}
```

## 📝 Scripts

- `pnpm install` - Install all dependencies
- `pnpm dev:web` - Start Next.js development server
- `pnpm dev:api` - Start NestJS development server
- `pnpm build` - Build all packages and applications
- `pnpm --filter @elearning/shared-types build` - Build shared types package

## 🔧 Configuration

### Environment Variables

Create `.env` files in both `apps/web` and `apps/api` directories:

```env
# apps/web/.env
NEXT_PUBLIC_API_URL=http://localhost:3001

# apps/api/.env
PORT=3001
```

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Next.js team
- NestJS team
- All contributors

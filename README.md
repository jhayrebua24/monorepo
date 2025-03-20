# Monorepo Setup Guide

This monorepo contains the following packages:

- `@acme/common`: A shared library with utility functions and components.
- `@acme/user`: A React application that consumes the `@acme/common` package.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [PNPM](https://pnpm.io/)

---

## Installation

1. Clone the repository:

```bash
git clone git@github.com:jhayrebua24/monorepo.git
cd monorepo
Install dependencies using PNPM:
```

2. Install packages

```bash
pnpm install

```

3. Building Packages
   To build all packages in the monorepo, run:

```bash
pnpm -r run build
```

4. To build specific packages:

```bash
pnpm build --filter @acme/common
pnpm build --filter @acme/user
```

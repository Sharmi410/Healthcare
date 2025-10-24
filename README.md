# Lovable Project

A modern web application built using **Next.js** and **React**, scaffolded in the Lovable platform.

author by:**Sharmila K**
Email id:**ksharmilaamulu@gmail.com**

## 🚀 Features
- Next.js and React
- API routes
- Modular component structure
- Easy deployment

## 🧰 Tech Stack
| Technology | Description |
|-------------|--------------|
| Next.js | Frontend framework |
| React | UI library |
| Node.js | Backend runtime |
| SWR | Data fetching |
| CSS Modules | Scoped styling |

## ⚙️ Setup
```bash
git clone https://github.com/your-username/lovable-project.git
cd lovable-project
npm install
npm run dev
```
Then open http://localhost:3000

## 🧩 Folder Structure
- `pages/` — Routes & APIs
- `components/` — Reusable UI parts
- `styles/` — CSS modules
- `lib/` — Backend logic
- `utils/` — Helpers

## 🧪 Example API
```js
export default function handler(req, res) {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
}
```

## License
MIT License © 2025

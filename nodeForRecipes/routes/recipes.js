//import express from 'express';
//import fs from 'fs';
//import path from 'path';
//import authMiddleware from '../middleware/authMiddleware.js';
//import { fileURLToPath } from 'url';
//
//const router = express.Router();
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const dbPath = path.join(__dirname, '../db/db.json');
//
//// שליפת כל המתכונים
//router.get('/', (req, res) => {
//    const db = JSON.parse(fs.readFileSync(dbPath));
//    res.json(db.recipes);
//});
//router.get('/:id', (req, res) => {
//    const { id } = req.params; // שליפת ה-ID מתוך ה-URL
//    const db = JSON.parse(fs.readFileSync(dbPath)); // קריאת נתוני המתכונים
//    const recipe = db.recipes.find(r => r.id === parseInt(id)); // המרת id מ-string למספר
//    // שינוי למצב בו ה-ID בקובץ db.json הוא string
//
//
//    if (!recipe) {
//        return res.status(404).json({ message: 'Recipe not found' }); // אם המתכון לא נמצא, מחזיר שגיאה
//    }
//
//    res.json(recipe); // מחזיר את המתכון במקרה שהוא נמצא
//});
//
//useEffect(() => {
//    if (id) {
//        console.log(`Fetching recipe with ID: ${id}`); // הדפסת ה-ID שנשלח
//        const recipe = recipes.find((r) => r.id === parseInt(id));
//        setSelectRecipe(recipe || null);
//    }
//}, [id, recipes]);
//
//// הוספת מתכון (רק למשתמש מחובר)
//router.post('/add', authMiddleware, (req, res) => {
//    console.log('Request Body:', req.body);
//    const { title,products, description} = req.body;
//    const db = JSON.parse(fs.readFileSync(dbPath));
//
//    console.log('Before adding:', db.recipes);
//
//    const newRecipe = {
//        id: Date.now(),
//        title,
//        products,
//        description,
//        authorId: req.user.id
//    };
//
//    db.recipes.push(newRecipe);
//    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
//    console.log('After adding:', db.recipes);
//
//    res.status(201).json({ message: "Recipe added", recipe: newRecipe });
//});
//
//export default router;
import express from 'express';
import fs from 'fs';
import path from 'path';
import authMiddleware from '../middleware/authMiddleware.js';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

// שליפת כל המתכונים
router.get('/', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.json(db.recipes);
});

// הוספת מתכון (רק למשתמש מחובר)
router.post('/add', authMiddleware, (req, res) => {
    const { title,products, description,image } = req.body;
console.log("i am hare!!!!!!!!!!!!!!!!!!!!!!!!!1");
    console.log("Received image:", image);
    const db = JSON.parse(fs.readFileSync(dbPath));

    const newRecipe = {
        id: Date.now(),
        title,
        products,
        description,
        authorId: req.user.id,
        image, 
    };

    db.recipes.push(newRecipe);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.status(201).json({ message: "Recipe added", recipe: newRecipe });
});

export default router;



const express=require('express')
const app=express()
const {PrismaClient}=require("@prisma/client");
const prisma=new PrismaClient()
app.use(express.json())
const cors = require('cors')
// Configurer CORS
app.use(cors());


const gestInfoAPIPrefix = '/GestInfo_API';

// Endpoint pour récupérer tous les pays
app.get(`${gestInfoAPIPrefix}/pays`, async (req, res) => {
  try {
    const pays = await prisma.pays.findMany();
    res.json(pays);
  } catch (error) {
    console.error('Erreur lors de la récupération des pays :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des pays' });
  }
});

// Endpoint pour récupérer tous les partiPolitiques
app.get(`${gestInfoAPIPrefix}/partiPolitiques`, async (req, res) => {
  try {
    const partiPolitiques = await prisma.parti_politique.findMany();
    res.json(partiPolitiques);
  } catch (error) {
    console.error('Erreur lors de la récupération des partiPolitiques :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des partiPolitiques' });
  }
});

// Endpoint pour récupérer tous les odd
app.get(`${gestInfoAPIPrefix}/odd`, async (req, res) => {
  try {
    const odd = await prisma.odd.findMany();
    res.json(odd);
  } catch (error) {
    console.error('Erreur lors de la récupération des odd :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des odd' });
  }
});

// Endpoint pour récupérer tous les oddCibles
app.get(`${gestInfoAPIPrefix}/oddCibles`, async (req, res) => {
  try {
    const oddCibles = await prisma.odd_cible .findMany();
    res.json(oddCibles);
  } catch (error) {
    console.error('Erreur lors de la récupération des oddCibles :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des oddCibles' });
  }
});

// Endpoint pour récupérer tous les indicateurs
app.get(`${gestInfoAPIPrefix}/indicateurs`, async (req, res) => {
  try {
    const indicateurs = await prisma.indicateur.findMany();
    res.json(indicateurs);
  } catch (error) {
    console.error('Erreur lors de la récupération des indicateurs :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des indicateurs' });
  }
});

// Endpoint pour récupérer tous les secteurs
app.get(`${gestInfoAPIPrefix}/secteurs`, async (req, res) => {
  try {
    const secteurs = await prisma.secteur.findMany();
    res.json(secteurs);
  } catch (error) {
    console.error('Erreur lors de la récupération des secteurs :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des secteurs' });
  }
});

// Endpoint pour récupérer tous les programmes
app.get(`${gestInfoAPIPrefix}/programmes`, async (req, res) => {
  try {
    const programmes = await prisma.programme.findMany();
    res.json(programmes);
  } catch (error) {
    console.error('Erreur lors de la récupération des programmes :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des programmes' });
  }
});


// Endpoint pour récupérer tous les zones
app.get(`${gestInfoAPIPrefix}/zones`, async (req, res) => {
  try {
    const zones = await prisma.zone.findMany();
    res.json(zones);
  } catch (error) {
    console.error('Erreur lors de la récupération des zones :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des zones' });
  }
});

// Endpoint pour récupérer tous les chefferies
app.get(`${gestInfoAPIPrefix}/chefferies`, async (req, res) => {
  try {
    const chefferies = await prisma.chefferies.findMany();
    res.json(chefferies);
  } catch (error) {
    console.error('Erreur lors de la récupération des chefferies :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des chefferies' });
  }
});

// Endpoint pour récupérer tous les sénateurs
app.get(`${gestInfoAPIPrefix}/senateurs`, async (req, res) => {
  try {
    const senateurs = await prisma.senateurs.findMany();
    res.json(senateurs);
  } catch (error) {
    console.error('Erreur lors de la récupération des sénateurs :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des sénateurs' });
  }
});

// Endpoint pour récupérer tous les députés
app.get(`${gestInfoAPIPrefix}/deputes`, async (req, res) => {
  try {
    const deputes = await prisma.deputes.findMany();
    res.json(deputes);
  } catch (error) {
    console.error('Erreur lors de la récupération des députés :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des députés' });
  }
});

// Endpoint pour récupérer tous les maires
app.get(`${gestInfoAPIPrefix}/maires`, async (req, res) => {
  try {
    const maires = await prisma.maires.findMany();
    res.json(maires);
  } catch (error) {
    console.error('Erreur lors de la récupération des maires :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des maires' });
  }
});

// Endpoint pour récupérer tous les préfets
app.get(`${gestInfoAPIPrefix}/prefets`, async (req, res) => {
  try {
    const prefets = await prisma.prefets.findMany();
    res.json(prefets);
  } catch (error) {
    console.error('Erreur lors de la récupération des préfets :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des préfets' });
  }
});

// Endpoint pour récupérer tous les sous-préfets
app.get(`${gestInfoAPIPrefix}/sous_prefets`, async (req, res) => {
  try {
    const sousPrefets = await prisma.sous_prefets.findMany();
    res.json(sousPrefets);
  } catch (error) {
    console.error('Erreur lors de la récupération des sous-préfets :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des sous-préfets' });
  }
});

// Endpoint pour récupérer tous les gouverneurs
app.get(`${gestInfoAPIPrefix}/gouverneurs`, async (req, res) => {
  try {
    const gouverneurs = await prisma.gouverneurs.findMany();
    res.json(gouverneurs);
  } catch (error) {
    console.error('Erreur lors de la récupération des gouverneurs :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des gouverneurs' });
  }
});

// Endpoint pour récupérer tous les conseillers municipaux
app.get(`${gestInfoAPIPrefix}/conseillers_municipaux`, async (req, res) => {
  try {
    const conseillersMunicipaux = await prisma.c_municipaux.findMany();
    res.json(conseillersMunicipaux);
  } catch (error) {
    console.error('Erreur lors de la récupération des conseillers municipaux :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des conseillers municipaux' });
  }
});

// Endpoint pour récupérer tous les conseillers régionaux
app.get(`${gestInfoAPIPrefix}/conseillers_regionaux`, async (req, res) => {
  try {
    const conseillersRegionaux = await prisma.c_regionaux.findMany();
    res.json(conseillersRegionaux);
  } catch (error) {
    console.error('Erreur lors de la récupération des conseillers régionaux :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des conseillers régionaux' });
  }
});

/*********************************************Les secteurs *******************************************/


const PORT=3002

app.listen(PORT, ()=>{
  console.log("server is running on PORT : ", PORT)
})


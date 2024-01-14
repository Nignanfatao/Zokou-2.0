const { Pool } = require("pg");

var dbUrl = "postgresql://postgres:aga-B533E3BcGdfa5*cFf*4daE4*f*fB@monorail.proxy.rlwy.net:12102/railway";
const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(proConfig);

async function createAlFicheTable() {
  const client = await pool.connect();

  try {
    // Créez la table north4_che si elle n'existe pas déjà
    await client.query(`
      CREATE TABLE IF NOT EXISTS alfiche(
        id SERIAL PRIMARY KEY,
        r1 TEXT DEFAULT 'aucun',
        r2 INTEGER DEFAULT 0,
        r3 INTEGER DEFAULT 0,
        r4 INTEGER DEFAULT 0,
        r5 INTEGER DEFAULT 0,
        r6 INTEGER DEFAULT 0,
        r7 INTEGER DEFAULT 0,
        r8 INTEGER DEFAULT 0,
        r9 INTEGER DEFAULT 0,
        r10 INTEGER DEFAULT 0,
        r11 INTEGER DEFAULT 0,
        r12 TEXT DEFAULT 'aucun',
        r13 TEXT DEFAULT 'aucun',
        r14 INTEGER DEFAULT 0,
        r15 INTEGER DEFAULT 0,
        r16 INTEGER DEFAULT 0,
        r17 INTEGER DEFAULT 0,
        r18 INTEGER DEFAULT 0,
        r19 INTEGER DEFAULT 0,
        r20 INTEGER DEFAULT 0,
        r21 INTEGER DEFAULT 0,
        r22 INTEGER DEFAULT 0,
        r23 INTEGER DEFAULT 0,
        r24 TEXT DEFAULT 'aucun',
        r25 TEXT DEFAULT 'aucun',
        r26 INTEGER DEFAULT 0,
        r27 INTEGER DEFAULT 0,
        r28 INTEGER DEFAULT 0,
        r29 INTEGER DEFAULT 0,
        r30 INTEGER DEFAULT 0,
        r31 INTEGER DEFAULT 0,
        r32 INTEGER DEFAULT 0,
        r33 INTEGER DEFAULT 0,
        r34 INTEGER DEFAULT 0,
        r35 INTEGER DEFAULT 0,
        r36 TEXT DEFAULT 'aucun'
      );
    `);
    console.log('Table alfiche créée avec succès');
  } catch (error) {
    console.error('Erreur lors de la création de la table alfiche:', error);
  } finally {
    client.release();
  }
}

// Fonction pour insérer des données
async function insertData() {
  const client = await pool.connect();
  try {
    for (let i = 1; i <= 12; i++) {
      const query = `
        INSERT INTO alfiche(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36)
      `;

      const values = [
        'aucun', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'aucun', 'aucun', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'aucun', 'aucun', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'aucun'
      ];

      await client.query(query, values);
      console.log(`Données insérées avec succès pour l'ID ${i}`);
    }
  } catch (error) {
    console.error("Erreur lors de l'insertion des données:", error);
  } finally {
    client.release();
  }
}
// Fonction pour récupérer toutes les données
async function getData1() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id =1';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData2() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 2';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData3() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 3';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData4() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 4';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData5() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 5';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData6() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 6';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData7() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 7';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData8() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 8';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData9() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 9';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData10() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 10';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData11() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 11';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

async function getData12() {
  const client = await pool.connect();

  try {
   const query = 'SELECT r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34, r35, r36 FROM alfiche WHERE id = 12';
    const result = await client.query(query);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}

// Appeler la fonction createNorth1FicheTable après la création de la table
createAlFicheTable();

module.exports = {
  createAlFicheTable,
  insertData,
  getData1,
  getData2,
  getData3,
  getData4,
  getData5,
  getData6,
  getData7,
  getData8,
  getData9,
  getData10,
  getData11,
  getData12,
};

const { zokou } = require('../framework/zokou');
const { getData1 } = require('../bdd/alfiche');
const { getData2 } = require('../bdd/alfiche');
const { getData3 } = require('../bdd/alfiche');
const { getData4 } = require('../bdd/alfiche');
const { getData5 } = require('../bdd/alfiche');
const { getData6 } = require('../bdd/alfiche');
const { getData7 } = require('../bdd/alfiche');
const { getData8 } = require('../bdd/alfiche');
const { getData9 } = require('../bdd/alfiche');
const { getData10 } = require('../bdd/alfiche');
const { getData11 } = require('../bdd/alfiche');
const { getData12 } = require('../bdd/alfiche');

zokou(
  {
    nomCom: 'north1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData1();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(4).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.*𝗡𝗢𝗥𝗧𝗛 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🐺🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Lily KÏNGS🇨🇬
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
Note: ⭐⭐⭐⭐⭐5.5/5
Records: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
🏆Trophées: ${data.r9}     🌟TOS: ${data.r10}     💫Awards: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Damian KÏNGS🇨🇬
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟*: ${data.r17}🎟
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
Note: ⭐⭐⭐⭐⭐5.5/5
Records: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
🏆Trophées: ${data.r21}     🌟TOS: ${data.r22}     💫Awards: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*: 50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟*: 0🎟
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
Note: ⭐1/5
Records: 0 Victoires✅/ 0 Défaites❌
🏆Trophées: 0     🌟TOS: 0     💫Awards: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *◁🔷𝗡𝗘𝗢 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗣𝗟𝗔𝗬𝗘𝗥𝗦🎮➕ᐅᐭ*`;
zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/UP1ubll.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          switch (joueur) {
            case "lily":
              colonnesJoueur = {
                rang_xp: "r1",
                golds: "r2",
                neocoins: "r3",
                gift_box: "r4",
                coupons: "r5",
                neo_pass: "r6",
                victoires: "r7",
                defaites: "r8",
                trophees: "r9",
                tos: "r10",
                awards: "r11",
                cards: "r12",
              };
              break;
            case "damian":
              colonnesJoueur = {
                rang_xp: "r13",
                golds: "r14",
                neocoins: "r15",
                gift_box: "r16",
                coupons: "r17",
                neo_pass: "r18",
                victoires: "r19",
                defaites: "r20",
                trophees: "r21",
                tos: "r22",
                awards: "r23",
                cards: "r24",
              };
              break;
            default:
              console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
          }

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE north4_1 SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE north4_1
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });


zokou(
  {
    nomCom: 'north2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData2();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗡𝗢𝗥𝗧𝗛 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🐺🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Lord A. KÏNGS🇹🇬
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
Note: ⭐⭐⭐3/5
Records: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
🏆Trophées: ${data.r9}     🌟TOS: ${data.r10}     💫Awards: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Ainz OG KÏNGS🇧🇫
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟*: ${data.r17}🎟
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
Note: ⭐1/5
Records: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
🏆Trophées: ${data.r21}     🌟TOS: ${data.r22}     💫Awards: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Seijin YUJI🇸🇳
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟*: ${data.r29}🎟
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
Note: ⭐⭐2/5
Records: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
🏆Trophées: ${data.r33}     🌟TOS: ${data.r34}     💫Awards: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *◁🔷𝗡𝗘𝗢 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗣𝗟𝗔𝗬𝗘𝗥𝗦🎮➕ᐅᐭ*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/UP1ubll.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 2
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          

zokou(
  {
    nomCom: 'north3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData3();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*NORTH DIVISION🐺🔴
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Thanatos Gold King🇧🇫
◇ *Rang XP🔰*: {data.r1}
◇ *Golds🧭*: {data.r2}🧭
◇ *NEOcoins🔹*: {data.r3}🔷
◇ *Gift Box🎁*: {data.r4}🎁
◇ *Coupons🎟️*: {data.r5}🎟️
◇ *NEO PASS🔸*: {data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: {data.r7} Victoires✅/ {data.r8} Défaites❌
*🏆Trophées*: {data.r9} *🌟TOS*: {data.r10} *💫Awards*: {data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: {data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Adorieru🇹🇬
◇ *Rang XP🔰*: {data.r13}
◇ *Golds🧭*: {data.r14}🧭
◇ *NEOcoins🔹*: {data.r15}🔷
◇ *Gift Box🎁*: {data.r16}🎁
◇ *Coupons🎟️*: {data.r17}🎟️
◇ *NEO PASS🔸*: {data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: {data.r19} Victoires✅/ {data.r20}  Défaites❌
*🏆Trophées*: {data.r21} *🌟TOS*: {data.r22} *💫Awards*: {data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: {data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*: 50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟️*: 0🎟️
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/UP1ubll.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          

zokou(
  {
    nomCom: 'east1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData4();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.* 𝗘𝗔𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦅🟢*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Atsushi KÏNGS🇨🇲 
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: White KÏNGS🇨🇮 
◇ *Rang XP🔰*: ${datat.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐⭐⭐4/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Kemael🇨🇮
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟️*: ${data.r29}🎟️
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐2.5/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33} *🌟TOS*: ${data.r34} *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
        *◁🔷𝗡𝗘𝗢 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗣𝗟𝗔𝗬𝗘𝗥𝗦🎮➕ᐅᐭ
*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/EashJkj.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 4
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          

zokou(
  {
    nomCom: 'east2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData5();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗘𝗔𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦅🟢*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Hinata Hyuga🇮🇪
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Goldy Shogun🇹🇬
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐2/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Utsune Infinity🇨🇲
◇ *Rang XP🔰*: {data.r25}
◇ *Golds🧭*: {data.r26}🧭
◇ *NEOcoins🔹*: {data.r27}🔷
◇ *Gift Box🎁*: {data.r28}🎁
◇ *Coupons🎟️*: {data.r29}🎟️
◇ *NEO PASS🔸*: {data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: {data.r31} Victoires✅/ {data.r32} Défaites❌
*🏆Trophées*: {data.r33} *🌟TOS*: {data.r34} *💫Awards*: {data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: {data.r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
        *◁🔷𝗡𝗘𝗢 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗣𝗟𝗔𝗬𝗘𝗥𝗦🎮➕ᐅᐭ
*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/EashJkj.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 5`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 5
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          
zokou(
  {
    nomCom: 'east3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData6();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗘𝗔𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦅🟢*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Adam GENESIS🇨🇮
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Altheos AETHERIA🇨🇮
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐2/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*:50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟️*: 0🎟️
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
        *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/EashJkj.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 6`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 6
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          
zokou(
  {
    nomCom: 'west1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗪𝗘𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦁🔵*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Æther GENESIS🇬🇦
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐⭐⭐4,5/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9}     *🌟TOS*: ${data.r10}     *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: SoloMoe Astral KÏNGS🇸🇳
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐⭐3.5/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21}     *🌟TOS*: ${data.r22}     *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*: 50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟️*: 0🎟️
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐⭐3.5/5
*Records*: 00 Victoires✅/ 00 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0  *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*:
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
       .*𝗘𝗔𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦅🟢*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Adam GENESIS🇨🇮
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Altheos AETHERIA🇨🇮
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐2/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*:50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟️*: 0🎟️
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/crAlkxv.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 7`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 7
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          
zokou(
  {
    nomCom: 'west2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = ``;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/crAlkxv.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 8`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 8
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          

zokou(
  {
    nomCom: 'west3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = ``;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/crAlkxv.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 9`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 9
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          

zokou(
  {
    nomCom: 'central1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = ``;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/H5FiyEQ.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 10`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 10
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          
zokou(
  {
    nomCom: 'central2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = ``;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/H5FiyEQ.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 11`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 11
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          
zokou(
  {
    nomCom: 'central3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = ``;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/H5FiyEQ.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://neoverse_user:e4Ts4KmggWvcvG3K2ijj9Cu2OciBJLff@dpg-ckrsaafd47qs73b2kt40-a.oregon-postgres.render.com/neoverse";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;

          

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 12`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfiche
            SET ${colonneObjet} = $1
            WHERE id = 12
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
          

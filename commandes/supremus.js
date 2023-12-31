const { zokou } = require('../framework/zokou');


zokou(
    {
        nomCom : "menus",
        categorie : "Supremus"
    }, async (dest , zk , commandeOptions) =>{

       const {repondre} = commandeOptions ;
      let msg = `█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
        𝐒𝐔𝐏𝐑𝐄𝐌𝐔𝐒 𝐌𝐄𝐍𝐔
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

`\`\`\Bienvenue "#Sendername" dans le menu principal de la 𝗖.𝗥.𝗣.𝗦, ici vous trouverez tout les informations dont vous aurez besoin concernant la 𝗖𝗥𝗣𝗦.`\`\`\

░░░░░░░░░░░░░░░░░░
══════════════════
               𝗖𝗥𝗣𝗦 • 𝗠𝗘𝗡𝗨
══════════════════

`\`\`\➣ Guide Intro
➣ Évolution Rôlistes
➣ CRPS Account
➣ Gaming Success
➣ Internal Rule
➣ Fiche (Username)`\`\`\

░░░░░░░░░░░░░░░░░░
⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 : Veuillez noter qu'en parcourant d'autres groupes de la *CRPS* vous aurez accès à d'autres commandes affilié ou non à celle-ci.

░░░░░░░░░░░░░░░░░░
   『 🪀 𝗦𝗨𝗣𝗥𝗘𝗠𝗨𝗦™ 🪀 』
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`
        repondre(msg)
    });

zokou(
    {
        nomCom : "guide_intro",
        categorie : "Supremus"
    }, async (dest , zk , commandeOptions) =>{

       const {repondre} = commandeOptions ;
      let msg = `█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
         𝐆𝐔𝐈𝐃𝐄 𝐃'𝐈𝐍𝐓𝐑𝐎
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

`\`\`\ Bienvenue "#Sendername" dans le guide d'introduction de la 𝗖.𝗥.𝗣.𝗦, ici vous aurez accès à toutes les informations dont vous aurez besoin pour bien débuter au sein de la 𝗖.𝗥.𝗣.𝗦 .`\`\`\

░░░░░░░░░░░░░░░░░░
══════════════════
      ♨️ 𝗟𝗜𝗚𝗨𝗘 𝗛𝗘𝗕𝗗𝗢 ♨️
══════════════════

♨️ 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡 : Bronze🥉, Argent🥈, Or🥇, Saphir🔷, Rubis♦️, Émeraude❇️, Améthyste⚜️, Perle🦪, Obsidienne🧿, Diamant💎.

🎖️ 𝗠𝗘𝗗𝗔𝗜𝗟𝗟𝗘 : Star⭐ (4 & 5), Startup🌟 (3 & 2), Shooting Star💫(1er)

░░░░░░░░░░░░░░░░░░
══════════════════
      🎮 𝗖𝗥𝗣𝗦 𝗚𝗔𝗠𝗘𝗦 🎮
══════════════════

Les jeux 𝗖𝗥𝗣𝗦 vous permettent d'acquérir des 𝗫𝗣🏅, évoluer et faire évoluer votre personnage.

👤𝗦𝗢𝗟𝗢 : Un mode de combat (1🆚1) dans lequel vous ne pouvez compter que sur vous même et vos atouts.

👥𝗧𝗘𝗔𝗠 : Un mode de combat (×🆚×) dans lequel vous pouvez faire appel à un (1) ou deux (2) autres joueurs max en soutien durant 1 tour ou échanger de place avec l'un d'eux, réutilisable après trois (3) tours minimum, la récompense est a départager.

⚔️𝗖𝗛𝗔𝗟𝗟𝗘𝗡𝗚𝗘 : Défié un joueur ou team vous permet d'évoluer plus rapidement mais cela vous coûtera minimum 1.000💎 et 50🏅 si vous gagnez vous obtenez 50% de votre mise en plus et si le joueur ou team défier gagne celui où celle-ci remporte votre mise.

🎭𝗔𝗩𝗘𝗡𝗧𝗨𝗥𝗘𝗨𝗫 : Le meilleure moyen de faire évoluer votre personnage, pour participer : créer un personnage, inscrivez-vous au mode ou événement, consulter le système story mode puis présenter vous en début d'activité.

░░░░░░░░░░░░░░░░░░
══════════════════
        🛂 𝗖𝗥𝗣𝗦 𝗝𝗢𝗕𝗦 🛂
══════════════════

🏛️𝗗𝗥𝗣𝗦 : Direction du Rôle Play Supremus (𝗗𝗥𝗣𝗦), ici vous pourriez obtenir une tâche provisoire à la hauteur de votre expérience. Les tâches et infos y seront exposées.

⚖️𝗔𝗥𝗕𝗜𝗧𝗥𝗔𝗚𝗘 : Vous arbitré les combats officiel. 𝐍𝐢𝐯𝐞𝐚𝐮 𝐑𝐞𝐪𝐮𝐢𝐬 : 3 & 50🧠. Vous devez maîtriser tout le système d'affrontements.

🎞️𝗦𝗖𝗘𝗡𝗔𝗥𝗜𝗦𝗧𝗘 : Vous supervisé la story mode. 𝐍𝐢𝐯𝐞𝐚𝐮 𝐑𝐞𝐪𝐮𝐢𝐬 : 5 & 100🧠. Vous devez maîtriser le système story mode, le système de combat et le photo montage.

🧮𝗧𝗥𝗔𝗡𝗦𝗔𝗖𝗧 𝗭𝗢𝗡𝗘 : Vous géré toutes les transactions (Mise, Parie, Transfère, Conversion, Vente, Achats). Une fois la transaction effectuée faite appel à l'admin principal pour validation.

⚠️ 𝐍.𝐁 : Vous devez actualisé la fiche du joueur une fois la tâche effectuer pour obtenir votre récompense.

░░░░░░░░░░░░░░░░░░
   『 🪀 𝗦𝗨𝗣𝗥𝗘𝗠𝗨𝗦™ 🪀 』
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`
        repondre(msg)
    });

zokou(
    {
        nomCom : "gaming_success,
        categorie : "Supremus"
    }, async (dest , zk , commandeOptions) =>{

       const {repondre} = commandeOptions ;
      let msg =` █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
        𝐆𝐀𝐌𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

`\`\`\ Bienvenue "#Sendername" dans l'archive des succès 𝗖.𝗥.𝗣.𝗦, les succès permettent aux joueurs d'évoluer après un certain nombre exploit précis, qui ce définissent comme suite :`\`\`\

░░░░░░░░░░░░░░░░░░
══════════════════
    🔥𝗙𝗟𝗔𝗠𝗠𝗘 𝗔𝗥𝗗𝗘𝗡𝗧🔥
══════════════════
Réaliser une série de combat officiel (5/J) pour débloquer ce succès.

𝐍𝐢𝐯 1 : Réalise une série de 24h (1 Jour) = 10🏅
𝐍𝐢𝐯 2: Réalise une série de 48h (2 Jours) = 25🏅
𝐍𝐢𝐯 3: Réalise une série de 72h (3 Jours) = 50🏅
𝐍𝐢𝐯 4: Réalise une série de... (4 Jours) = 75🏅
𝐍𝐢𝐯 5: Réalise une série de... (5 Jours) =  100🏅

░░░░░░░░░░░░░░░░░░
══════════════════
      🧘‍♂️ 𝗚𝗥𝗔𝗡𝗗 𝗦𝗔𝗚𝗘 🧘‍♂️
══════════════════
Accumule un maximum d'expérience (XP🏅) pour débloquer ce succès.

𝐍𝐢𝐯 1 : Accumulé   100🏅 =  10🧠
𝐍𝐢𝐯 2: Accumulé   250🏅 =  25🧠
𝐍𝐢𝐯 3: Accumulé   500🏅 =  50🧠
𝐍𝐢𝐯 4: Accumulé   750🏅 =   75🧠
𝐍𝐢𝐯 5: Accumulé 1000🏅 = 100🧠

░░░░░░░░░░░░░░░░░░
══════════════════
        🏆 𝗖𝗛𝗔𝗠𝗣𝗜𝗢𝗡 🏆
══════════════════
Passe en division supérieur pour débloquer ce succès.

𝐍𝐢𝐯 1 : Passe en division Argent🥈 = 500💎
𝐍𝐢𝐯 2: Passe en division Or🥇 = 750💎
𝐍𝐢𝐯 3: Passe en division Saphir🔷 = 1.000💎
𝐍𝐢𝐯 4: Passe en division Rubis♦️ = 1.250💎
𝐍𝐢𝐯 5: Passe en division Émeraude❇️ = 1.500💎
𝐍𝐢𝐯 6: Passe en division Améthyste⚜️ = 1.750💎
𝐍𝐢𝐯 7: Passe en division Perle🦪 = 2.000💎
𝐍𝐢𝐯 8: Passe en division Obsidienne🧿 = 2.250💎
𝐍𝐢𝐯 9: Passe en division Diamant💎 = 2.500💎
𝐍𝐢𝐯 10: Termine toute les divisions de la ligue hebdomadaire durant la saison 𝐂𝐑𝐏𝐒 = 3.000💎

░░░░░░░░░░░░░░░░░░
══════════════════
      😎 𝗦𝗣𝗘𝗖𝗜𝗔𝗟𝗜𝗦𝗧𝗘 😎
══════════════════
Obtient des médailles de division pour débloquer ce succès.

𝐍𝐢𝐯 1 : Obtient 5 Stars⭐ = 100🏅
𝐍𝐢𝐯 2: Obtient 10 Stars⭐ = 200🏅
𝐍𝐢𝐯 3: Obtient 3 Startup🌟 = 300🏅
𝐍𝐢𝐯 4: Obtient 5 Startup🌟 = 400🏅
𝐍𝐢𝐯 5: Obtient 1 Shooting Star💫 = 500🏅

░░░░░░░░░░░░░░░░░░
══════════════════
    🏅 𝗚𝗥𝗔𝗡𝗗 𝗠𝗔𝗜𝗧𝗥𝗘 🏅
══════════════════
Domine l'arène de combat, enchaîne une série de victoire pour débloquer ce succès.

𝐍𝐢𝐯 1 : Enchaîne 5 victoires = 500💎
𝐍𝐢𝐯 2: Enchaîne 10 victoires = 1.000💎
𝐍𝐢𝐯 3: Enchaîne 15 victoires = 1.500💎
𝐍𝐢𝐯 4: Enchaîne 20 victoires = 2.000💎
𝐍𝐢𝐯 5: Enchaîne 30 victoires = 3.000💎

░░░░░░░░░░░░░░░░░░
══════════════════
 👺 𝗚𝗥𝗔𝗡𝗗 𝗗𝗜𝗖𝗧𝗔𝗧𝗘𝗨𝗥 👺
══════════════════
Fini premier au classement de la ligue hebdomadaire de chaque divisions pour débloquer ce succès.

𝐍𝐢𝐯 1 : Fini 1er de la division Bronze🥉 = 10🧠
𝐍𝐢𝐯 2: Fini 1er de la division Argent🥈 = 15🧠 
𝐍𝐢𝐯 3: Fini 1er de la division Or🥇 = 20🧠
𝐍𝐢𝐯 4: Fini 1er de la division Saphir🔷 = 25🧠
𝐍𝐢𝐯 5: Fini 1er de la division Rubis♦️ = 30🧠
𝐍𝐢𝐯 6: Fini 1er de la division Émeraude❇️ = 35🧠
𝐍𝐢𝐯 7: Fini 1er de la division Améthyste⚜️ = 40🧠
𝐍𝐢𝐯 8: Fini 1er de la division Perle🦪 = 45🧠
𝐍𝐢𝐯 9: Fini 1er de la division Obsidienne🧿 = 50🧠
𝐍𝐢𝐯 10: Fini 1er de la division Diamant💎 = 60🧠

░░░░░░░░░░░░░░░░░░
══════════════════
 🧠 𝗧𝗔𝗟𝗘𝗡𝗧 𝗜𝗡𝗧𝗘𝗟𝗟𝗘𝗖𝗧 🧠
══════════════════
Accumule un maximum de QI🧠 pour débloquer ce succès.

𝐍𝐢𝐯 1 : Accumule 10🧠 = Premium 12h.
𝐍𝐢𝐯 2: Accumule 20🧠 = Premium 24h.
𝐍𝐢𝐯 3: Accumule 30🧠 = Premium 48h.
𝐍𝐢𝐯 4: Accumule 40🧠 = Premium 72h.
𝐍𝐢𝐯 5: Accumule 50🧠 = Premium 7 jours.

░░░░░░░░░░░░░░░░░░
══════════════════
🤠 𝗦𝗧𝗢𝗥𝗬 𝗔𝗗𝗩𝗘𝗡𝗧𝗨𝗥𝗘𝗥 🤠
══════════════════
Réalise une série de tours (12/J) dans une story mode pour débloquer ce succès.

𝐍𝐢𝐯 1 : Réalise une série de 24h (1 Jour) = 100🏅
𝐍𝐢𝐯 2: Réalise une série de 48h (2 Jours) = 200🏅
𝐍𝐢𝐯 3: Réalise une série de 72h (3 Jours) = 300🏅
𝐍𝐢𝐯 4: Réalise une série de... (4 Jours) = 400🏅
𝐍𝐢𝐯 5: Réalise une série de... (5 Jours) = 500🏅

░░░░░░░░░░░░░░░░░░
══════════════════
 🌝 𝗛𝗘𝗥𝗢 𝗗𝗨 𝗪𝗘𝗘𝗞𝗘𝗡𝗗 🌚
══════════════════
Réalise des séries d'activités en week-end pour débloquer ce succès.

𝐍𝐢𝐯 1 : Réalise 5 activités = 25🏅
𝐍𝐢𝐯 2: Réalise 10 activités = 50🏅
𝐍𝐢𝐯 3: Réalise 15 activités = 100🏅
𝐍𝐢𝐯 4: Réalise 20 activités = 200🏅
𝐍𝐢𝐯 5: Réalise 25 activités = 400🏅

░░░░░░░░░░░░░░░░░░
══════════════════
💯 𝗦𝗨𝗣𝗥𝗘𝗠𝗨𝗦 𝗟𝗘𝗚𝗘𝗡𝗗 💯
══════════════════
Débloque toutes les médailles de succès pour débloquer ce succès.

𝐍𝐢𝐯 1 : 😎 Professionnel : Débloque toute les médailles Star⭐ = Premium 3 mois.
𝐍𝐢𝐯 2: 🕵️‍♂️ Spécialiste : Débloque toute les médailles Startup🌟 = Premium 6 mois.
𝐍𝐢𝐯 3: 🦦 Retraité : Débloque toute les médailles shooting star💫 = Premium 1 an.

░░░░░░░░░░░░░░░░░░
⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 : Lorsque vous débloquer toute les médailles d'un succès celle-ci passe au niveau supérieur (⭐->🌟->💫).

░░░░░░░░░░░░░░░░░░

   『 🪀 𝗦𝗨𝗣𝗥𝗘𝗠𝗨𝗦™ 🪀 』
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`
        repondre(msg)
    });


zokou(
    {
        nomCom : "crps_account",
        categorie : "Supremus"
    }, async (dest , zk , commandeOptions) =>{

       const {ms,repondre,superUser , arg} = commandeOptions ;
      let msg = `█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
              𝐂𝐑𝐏𝐒 𝐑𝐔𝐋𝐄
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

`\`\`\Bienvenue "#Sendername" dans l'archive des règles 𝗖.𝗥.𝗣.𝗦, ici vous aurez les informations nécessaires pour éviter toutes confusions.`\`\`\

░░░░░░░░░░░░░░░░░░
══════════════════
              𝗕𝗔𝗦𝗜𝗖 𝗥𝗨𝗟𝗘
══════════════════

`\`\`\⚠️ Veuillez gardé un respect mutuelle entre tout un chacun (Amende -500💎) si persiste (Ban🚫).
⚠️ Lien strictement interdit (🚫Ban).
⚠️ Partage de contenus pornographique (Amende -500💎).
⚠️ Vole et Copie de contenus CRPS sans autorisation ni collaboration (🚫Ban).`\`\`\

░░░░░░░░░░░░░░░░░░
══════════════════
            𝗚𝗔𝗠𝗜𝗡𝗚 𝗥𝗨𝗟𝗘
══════════════════

*💯 𝗟𝗜𝗚𝗨𝗘 𝗛𝗘𝗕𝗗𝗢 :* 
`\`\`\⚠️ L'inscription coûte 300$£💎, il y à 10 divisions et 10 joueurs par division. 
⚠️ La ligue hebdo dure une (1) semaine, à la fin de la ligue les 5 premier du classement passe en division supérieur. ⚠️ Vous devez obtenir un max de points pour garder l'en-tête du classement et obtenir une médaille.`\`\`\

*⚔️ 𝗙𝗜𝗚𝗛𝗧 :* 
`\`\`\⚠️ En cas de retard, vous êtes Immobile à la première section. 10mins après la latence combat terminé, victoire par forfait.
⚠️ Éviter les débats à tort, vous pouvez demander une révision du verdict et si vous avez raison le combat continue si non vous amende (-100$£💎) pour perte de temps.
⚠️ En équipe vous pouvez échanger votre place ou faire appel à un (1) ou deux (2) autres joueur en soutien durant un (1) tour, réutilisable après trois (3) tours.`\`\`\

*🎭 𝗦𝗧𝗢𝗥𝗬 𝗠𝗢𝗗𝗘 :* 
`\`\`\⚠️ Les spams (stickers, clavardage...) et autres hors contexte sont interdits (🚫 Pénalité).
⚠️ Latence 10mins une fois le délai passé le tour est écoulé.
⚠️ Veillez à rédiger un pavé fluide et précis en prenant compte de chacune des infos inscrits (Nom, Dialogue, Section, Infos & Stats).`\`\`\


*🎮 𝗚𝗔𝗠𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦𝗦 :* 
`\`\`\⚠️ Lorsque vous débloquer un succès, vous passé au niveau suivant ce qui réinitialise vos stats précédent vous devez donc doublé d'efforts pour débloquer l'étoile suivante.`\`\`\

*⬆️ 𝗘𝗩𝗢𝗟𝗨𝗧𝗜𝗢𝗡 :* 
`\`\`\⚠️ Seule les 𝐗𝐏🏅 permettent aux joueurs ou personnage d'évoluer, Un niveau de 1 à 10🎚️ pour une valeur de 100 à 2.000🏅.
⚠️ Seule les activités liées à la story mode font évoluer les personnages.
⚠️ Seule les activités hors de la story mode font évoluer les joueurs.```

*💳 𝗣𝗥𝗘𝗠𝗨𝗜𝗠 :* 
`\`\`\⚠️ Être premium ne vous épargne en rien de certaines règles et obligations, vous devez donc veiller à ne pas enfreindre nos règlements.
⚠️ Le mode premium s'active à la zone de transaction et coûte 10$𝐓♦️ pour 24h, 30$𝐓♦️ pour 3 jours et 50$𝐓♦️ pour 1 semaine.`\`\`\

░░░░░░░░░░░░░░░░░░
⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 : 

░░░░░░░░░░░░░░░░░░
   『 🪀 𝗦𝗨𝗣𝗥𝗘𝗠𝗨𝗦™ 🪀 』
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`
        repondre(msg)
    });


zokou(
    {
        nomCom : "evolution_roliste",
        categorie : "Supremus"
    }, async (dest , zk , commandeOptions) =>{

       const {repondre } = commandeOptions ;
      let msg = `█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
    𝐄𝐕𝐎𝐋𝐔𝐓𝐈𝐎𝐍 𝐑𝐎𝐋𝐈𝐒𝐓𝐄
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

`\`\`\ Bienvenue "#Sendername" dans le système d'évolution des rôlistes de la 𝗖.𝗥.𝗣.𝗦, ici est archivé les récompenses fournir par certaines activités de la 𝗖𝗥𝗣𝗦.`\`\`\

░░░░░░░░░░░░░░░░░░
══════════════════
      🎮 𝗖𝗥𝗣𝗦 𝗚𝗔𝗠𝗘𝗦 🎮
══════════════════

♨️ 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡 : Les récompenses sont attribués selon votre place dans le classement des divisions et sont directement destiné à l'évolution des personnages.
𝐍° 1 : 50🏅   𝐍° 2: 40🏅   𝐍° 3: 30🏅
𝐍° 4: 25🏅   𝐍° 5: 20🏅   𝐍° 6: 10🏅
𝐍° 7: 05🏅   𝐍° 8: 05🏅   𝐍° 9: 05🏅
𝐍° 10: 00🏅

👤𝗦𝗢𝗟𝗢 : Le personnage utiliser obtient 50% d'expérience (🏅) et les 50% restant s'accumulent à ceux du joueur.
𝗩 : 20🏅/200💎 - 𝗗 : 10🏅 - 𝗙 : 0🏅

👥𝗧𝗘𝗔𝗠 : Les combats en équipe augmente uniquement l'expérience (🏅) des joueurs.
𝗩 : 60🏅/600💎 - 𝗗 : 30🏅 - 𝗙 : 0🏅

🎭𝗔𝗩𝗘𝗡𝗧𝗨𝗥𝗘𝗨𝗫 : Les récompenses attribué en story mode dependent de votre activité et s'accumulent à ceux du personnage à des fin de survie. (Pour des infos plus détaillée veuillez consulter le système story mode.).

░░░░░░░░░░░░░░░░░░
══════════════════
        🛂 𝗖𝗥𝗣𝗦 𝗝𝗢𝗕𝗦 🛂
══════════════════

🏛️𝗗𝗥𝗣𝗦 : La *Direction du Rôle Play Station* rémunère selon les tâches exécuté, en d'autre terme vous obtenez votre récompense en fonction du nombre de tâche effectuer.

⚖️𝗔𝗥𝗕𝗜𝗧𝗥𝗔𝗚𝗘 : Vous obtenez 200💎 pour chaque arbitrage achevé.

🎞️𝗦𝗖𝗘𝗡𝗔𝗥𝗜𝗦𝗧𝗘 : Vous obtenez 500💎 pour chaque session (12 tours).

🧮𝗧𝗥𝗔𝗡𝗦𝗔𝗖𝗧 𝗭𝗢𝗡𝗘 : Vous obtenez 100💎 pour chaque transaction effectuée.

⚠️ 𝐍.𝐁 : Vous devez actualisé la fiche du joueur une fois la tâche effectuer pour obtenir votre récompense.

░░░░░░░░░░░░░░░░░░
   『 🪀 𝗦𝗨𝗣𝗥𝗘𝗠𝗨𝗦™ 🪀 』
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`
        repondre(msg)
    });  

zokou(
    {
        nomCom : "internal_ rule",
        categorie : "Supremus"
    }, async (dest , zk , commandeOptions) =>{

       const {ms,repondre,superUser , arg} = commandeOptions ;
      let msg = `█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
     𝐒𝐔𝐏𝐑𝐄𝐌𝐔𝐒 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

`\`\`\Bienvenue "#Sendername" dans le système monétaire de la 𝗖.𝗥.𝗣.𝗦, ici vous trouverez toutes les informations concernant les devises 𝗖𝗥𝗣𝗦.`\`\`\

░░░░░░░░░░░░░░░░░░
══════════════════
 🧭 $𝐔𝐏𝐑𝐄𝐌𝐔𝐒 ₱𝐈𝐄𝐂𝐄𝐒 🧭
══════════════════
Le *$upremus ₱ièces* ($₱🧭) est une monnaie commune généralement gagné lors en story mode, elle vous permet d'acheter des armes et inventaires lors de vos aventures story mode.

🔸 Participation Story Mode
🔸 Conversion de devise
🔹 Situation Financière

░░░░░░░░░░░░░░░░░░
══════════════════
💎 $𝐔𝐏𝐑𝐄𝐌𝐔𝐒 £𝐈𝐀𝐌𝐎𝐍𝐃 💎
══════════════════
Le *$upremus £iamond* ($£💎) est une monnaie précieuse généralement gagné lors des activités *CRPS* et hors story mode, elle vous permet d'effectuer des achats ou des activités (Armes, Combats, Story Mode...)

🔸 Combats
🔸 Conversion de devise
🔸 Ligue Hebdomadaire
🔹 Achats
🔹 Abonnement

░░░░░░░░░░░░░░░░░░
══════════════════
 ♦️ $𝐔𝐏𝐑𝐄𝐌𝐔𝐒 𝐓𝐎𝐊𝐄𝐍 ♦️
══════════════════
Le *$upremus Token* ($T♦️) est une monnaie rare offerte pour votre contribution, elle est généralement gagné par votre contribution et vous permet d'accéder au mode *PREMIUM* .

*🔸 Abonne toi (WhatsApp, Facebook, Instagram ou Télégramme) :* 1♦️
*🔸 Like et Comments une PUB :* 1♦️
*🔸 Partage nos PUB :* 1♦️
*🔸 Invite 1 nouveau rôliste :* 1♦️
*🔹 PREMIUM :* En mode premium vous pouvez effectuer des (Combats ou Story Mode) gratuitement, effectuer des achats ou inscription avec une réduction de -50% et +25% sur toutes vos récompenses.

░░░░░░░░░░░░░░░░░░
⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 : 

░░░░░░░░░░░░░░░░░░
   『 🪀 𝗦𝗨𝗣𝗥𝗘𝗠𝗨𝗦™ 🪀 』
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`
        repondre(msg)
    });

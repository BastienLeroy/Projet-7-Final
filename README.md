# Projet-7-Final

#PRINCIPES DE SECURITE

1 Injection --> clear xss / helmet / regex 
2 Piratage de session --> hash / jwt / regex 
3 Exposition de données sensibles --> hash / helmet 
4 Entités externes XML (XXE)--> allow controll origin --> local host 4200 
5 Contournement du contrôle d’accès --> hash / jwt /.env 
6 Security Misconfiguration --> helmet 
7 Cross-Site Scripting (XSS) --> clear xss / helmet 
8 Désérialisation non sécurisée (Insecure Deserialisation) --> JSON.parse 
9 Utilisation de composants présentant des vulnérabilités connues --> Maintien a jour des modules 
10 Manque de surveillance et de monitoring --> Maintien a jour des modules


#CONFIGURATION DE LA BDD

1 Importer le fichier en .sql (voir repo)
2 Remplacer les identifiants présents dans le .env par vos identifiants
3 La BDD est configuré


#UTILISATION

Une fois la BDD configuré

1 Lancer le Back-End avec la commande nodemon
2 Lancer le Front-End avec la commande npm start


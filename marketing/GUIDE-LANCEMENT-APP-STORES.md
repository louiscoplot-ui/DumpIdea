# Guide lancement App Store + Google Play

## Ce qui est déjà fait
- ✅ Capacitor installé et configuré
- ✅ `capacitor.config.json` créé (appId: com.dropleapp.drople)
- ✅ Scripts npm ajoutés (build:ios, build:android, open:ios, open:android)

---

## ANDROID (Google Play) — Plus simple, commence par ça

### Ce qu'il te faut
- Android Studio (gratuit) : https://developer.android.com/studio
- Compte Google Play Developer : 25$ une fois : https://play.google.com/console

### Étapes

1. **Build + sync Android**
   ```bash
   cd frontend
   npm run build:android
   # La première fois, ça crée le dossier /android
   npx cap add android  # seulement la 1ère fois
   npm run build:android
   ```

2. **Ouvrir dans Android Studio**
   ```bash
   npm run open:android
   ```

3. **Dans Android Studio**
   - Build → Generate Signed Bundle / APK
   - Choisir "Android App Bundle" (.aab)
   - Créer une keystore (garde-la précieusement, elle est liée à l'app pour toujours)
   - Build release

4. **Soumettre sur Google Play Console**
   - Créer nouvelle app "Drople"
   - Upload le .aab
   - Remplir description, captures d'écran, icône 512x512
   - Politique de confidentialité requise (je peux la générer)
   - Soumettre → review 1–3 jours

---

## iOS (App Store) — Nécessite un Mac

### Ce qu'il te faut
- Mac avec Xcode (gratuit sur Mac App Store)
- Compte Apple Developer : 99$/an : https://developer.apple.com/programs/
- iPhone pour tester (optionnel mais recommandé)

### Étapes

1. **Build + sync iOS (sur Mac)**
   ```bash
   cd frontend
   npx cap add ios   # seulement la 1ère fois
   npm run build:ios
   ```

2. **Ouvrir dans Xcode**
   ```bash
   npm run open:ios
   ```

3. **Dans Xcode**
   - Connecter ton compte Apple Developer
   - Sélectionner "Drople" comme target
   - Changer Bundle Identifier → com.dropleapp.drople
   - Product → Archive
   - Distribute App → App Store Connect

4. **Sur App Store Connect** (appstoreconnect.apple.com)
   - Créer nouvelle app
   - Remplir: description, captures, icônes (1024x1024 requis)
   - Politique confidentialité requise
   - Soumettre → review Apple 1–7 jours

---

## ICÔNES REQUISES

### Android
- 512x512 PNG (Play Store)
- adaptive-icon foreground 1024x1024

### iOS
- 1024x1024 PNG (App Store)
- Xcode génère les autres tailles automatiquement

---

## PUSH NOTIFICATIONS — Adaptation backend

Actuellement le backend utilise Web Push (VAPID).
Pour les apps natives, il faut en plus :

**Android → Firebase Cloud Messaging (FCM)**
- Gratuit
- Créer projet Firebase → ajouter app Android
- Récupérer google-services.json → mettre dans /android/app/
- Installer @capacitor/push-notifications

**iOS → Apple Push Notification service (APNs)**
- Inclus dans le compte Apple Developer
- Nécessite un certificat APNs
- Installer @capacitor/push-notifications

**Je peux implémenter tout ça quand tu es prêt.**

---

## CALENDRIER RECOMMANDÉ

| Semaine | Action |
|---------|--------|
| Sem. 1 (7 avril) | Lancement réseaux sociaux |
| Sem. 3 (21 avril) | Installer Android Studio, créer compte Google Play |
| Sem. 4 (28 avril) | Build Android, soumettre Google Play |
| Mai sem. 1 | Lancement Product Hunt |
| Mai sem. 2 | Build iOS (si Mac dispo), soumettre App Store |
| Juin | Apps approuvées, annonce "dispo sur les stores" |

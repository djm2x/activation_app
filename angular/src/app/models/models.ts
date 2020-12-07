export class User {
  id = 0;
  nom = '';
  prenom = '';
  email = '';
  password = '';
  phone = '';
  isActive = false;
  matricule = '';
  profil = '';
  imageUrl = '';
}

export class Activation {
  id = 0;
  nom = '';
  prenom = '';
  email = '';
  date = new Date();
  nomProduit = 'Time Track';
  macId = '';
  cpuId = '';
  biosId = '';
  baseId = '';
}

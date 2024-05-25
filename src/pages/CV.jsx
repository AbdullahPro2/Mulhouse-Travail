import React from 'react';
import PageHeading from '../layout/PageHeading';
import ListItem from '../components/cv/ListItem';
import avatar from '../assets/CVSection/avatar.png';
import thumnail from '../assets/CVSection/Thumbnail.svg';
function CV() {
  return (
    <div className="mx-auto mb-10 mt-10 px-2 md:max-w-[80%] md:px-0">
      <PageHeading text="Créez votre CV professionnel avec facilité" />

      <div className="mt-16 flex items-center gap-6">
        <img src={avatar} alt="Author avatar" className="w-16" />
        <div>
          <p className="text-lg font-medium md:text-xl">Abdullah Nezami</p>
          <p className="font-normal md:text-lg">
            Publié: Mai 25, 2024 - 3 minutes de lecture
          </p>
        </div>
      </div>
      <img src={thumnail} className="mt-8" />

      <main class="px-4 py-12 sm:px-8 lg:px-16">
        <section class="mb-12">
          <PageHeading text="Étapes pour créer un CV efficace" />

          <div>
            <h2 className="mb-3 text-lg font-light italic md:text-2xl">
              Sur cette page, vous découvrirez
            </h2>
            <ul className="relative space-y-3 border-l-2 border-[#1b64ac] px-4 py-2">
              <ListItem text="Choisissez le bon format" />
              <ListItem text="Rédigez un bon titre" />
              <ListItem text="Détaillez vos expériences" />
              <ListItem text="Mentionnez vos compétences" />
              <ListItem text="section de formation" />
              <ListItem text="Personal Détail" />
              <ListItem text="Langues" />
              <ListItem text="Atouts" />
              <ListItem text="réseaux sociaux" />
            </ul>
          </div>
          {/* <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">
                1. Choisissez le bon format
              </h3>
              <p>
                Utilisez un format de CV qui met en valeur vos compétences et
                expériences de manière claire et concise.
              </p>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">
                2. Rédigez un bon titre
              </h3>
              <p>
                Un titre accrocheur peut attirer l'attention des recruteurs et
                résumer en quelques mots votre profil professionnel.
              </p>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">
                3. Détaillez vos expériences
              </h3>
              <p>
                Listez vos expériences professionnelles en mettant en avant vos
                réalisations et les compétences acquises.
              </p>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">
                4. Mentionnez vos compétences
              </h3>
              <p>
                Incluez une section sur vos compétences clés, notamment les
                compétences techniques et interpersonnelles.
              </p>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">
                5. Ajoutez une section formation
              </h3>
              <p>
                Indiquez vos diplômes et formations pertinentes pour le poste
                que vous visez.
              </p>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">6. Relisez et corrigez</h3>
              <p>
                Assurez-vous que votre CV ne contient aucune faute d'orthographe
                ou de grammaire avant de l'envoyer.
              </p>
            </div>
          </div> */}
        </section>

        {/* <section class="mb-12">
          <h2 class="mb-6 text-center text-3xl font-bold">
            Conseils pour améliorer votre CV
          </h2>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">Utilisez des mots-clés</h3>
              <p>
                Intégrez des mots-clés pertinents liés à l'emploi que vous
                recherchez pour optimiser votre CV pour les systèmes de suivi
                des candidatures (ATS).
              </p>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">
                Quantifiez vos réalisations
              </h3>
              <p>
                Utilisez des chiffres et des statistiques pour démontrer
                l'impact de votre travail et vos réussites.
              </p>
            </div>
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl font-semibold">Personnalisez votre CV</h3>
              <p>
                Adaptez chaque CV que vous envoyez pour qu'il corresponde aux
                exigences spécifiques du poste visé.
              </p>
            </div>
          </div>
        </section> */}

        <section class="rounded-lg bg-blue-100 py-12 text-center">
          <h2 class="mb-4 text-3xl font-bold">
            Besoin d'aide pour créer votre CV?
          </h2>
          <p class="mx-auto mb-8 max-w-xl text-lg">
            Nous proposons des services de relecture et de rédaction de CV pour
            vous assurer que votre candidature se démarque.
          </p>
          <button class="rounded-[100px] bg-[linear-gradient(94.29deg,#3FB9DF_7.7%,#374AF4_98.45%)] px-10 py-5 text-lg font-semibold text-white shadow-[0px_8px_16px_rgba(0,0,0,0.15)]">
            Contactez-nous
          </button>
        </section>
      </main>
    </div>
  );
}

export default CV;

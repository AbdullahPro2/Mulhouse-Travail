import React from 'react';
import PageHeading from '../layout/PageHeading';
import ListItem from '../components/cv/ListItem';
import avatar from '../assets/CVSection/avatar.png';
import thumnail from '../assets/CVSection/Thumbnail.svg';
import CvItem from '../components/cv/CvItem';
import { NavLink } from 'react-router-dom';
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
      <img src={thumnail} className="mt-8  rounded" />

      <main className="px-4 py-12 sm:px-8 lg:px-16">
        <section className="mb-12">
          <PageHeading text="Étapes pour créer un CV efficace" />

          <div>
            <h2 className="mb-3 text-lg font-light italic md:text-2xl">
              Sur cette page, vous découvrirez
            </h2>
            <ul className="relative space-y-3 border-l-2 border-[#1b64ac] px-4 py-2">
              <ListItem text="Choisissez le bon format" nom="format" />
              <ListItem text="Rédigez un bon titre" nom="titre" />
              <ListItem text="Détaillez vos expériences" nom="experience" />
              <ListItem text="Mentionnez vos compétences" nom="compétences" />
              <ListItem text="section de formation" nom="formation" />
              <ListItem text="Personal Détail" nom="Détail" />
              <ListItem text="Langues" nom="language" />
              <ListItem text="Atouts" nom="Atouts" />
              <ListItem text="réseaux sociaux" nom="sociaux" />
            </ul>
          </div>

          <main className="mt-8">
            <CvItem heading="1. Choisissez le bon format" nom="format">
              <p className="text-justify">
                Utilisez un format de CV qui met en valeur vos compétences et
                expériences de manière claire et concise. Pour beaucoup de gens
                Le CV anti-chronologique, parfois appelé CV chronologique
                inverse, est la forme de CV la plus répandue aujourd’hui et la
                plus utilisée en France. Il vous permet d’indiquer vos
                expériences et vos formations de la plus récente à la plus
                ancienne.
              </p>
            </CvItem>
            <CvItem heading="2. Rédigez un bon titre" nom="titre">
              <p className="text-justify">
                Un titre accrocheur peut attirer l'attention des recruteurs et
                résumer en quelques mots votre profil professionne. C'est Votre
                résumé professionnel. Une résumé professionnel est une courte
                biographie qui vous présente au lecteur. Cette section résume
                vos meilleures qualifications et explique votre cheminement de
                carrière idéal.
              </p>
            </CvItem>
            <CvItem heading="3. Détaillez vos expériences" nom="experience">
              <p className="text-justify">
                Listez vos expériences professionnelles en mettant en avant vos
                réalisations et les compétences acquises. Énumérez votre
                expérience par ordre chronologique inverse, en commençant par
                votre expérience la plus récente.
                <br /> Détaillez toutes vos expériences de travail pratiques
                afin que votre employeur potentiel puisse voir votre cheminement
                de carrière, notamment :
              </p>
              <ul className="space-y-2">
                <li>• Emploi à temps partiel</li>
                <li>• Des stages</li>
                <li>• Projets de recherche</li>
                <li>• Travail de labo Bénévolat</li>
                <li>• Expérience sur le terrain</li>
              </ul>
            </CvItem>
            <CvItem heading="4. Mentionnez vos compétences" nom="compétences">
              <p className="text-justify">
                Incluez une section sur vos compétences clés, notamment les
                compétences techniques et interpersonnelles. Énumérez toutes les
                capacités qui s'appliquent à l'emploi potentiel, telles que les
                langues étrangères ou un type de logiciel. Essayez d'inclure des
                compétences liées à la description de poste pour faire de vous
                un candidat plus souhaitable.
              </p>
            </CvItem>
            <CvItem heading="5. Section de formation" nom="formation">
              <p className="text-justify">
                Indiquez vos diplômes et formations pertinentes pour le poste
                que vous visez.Étant donné qu’un CV est souvent utilisé pour le
                processus de recherche d’emploi universitaire, il est important
                d’inclure une section sur votre parcours scolaire. Énumérez
                votre formation par ordre chronologique inverse, en commençant
                par votre diplôme le plus récent. Incluez les diplômes que vous
                avez obtenus et ceux que vous poursuivez.
              </p>
            </CvItem>
            <CvItem heading="6. Personal Détail" nom="Détail">
              <p className="text-justify">
                Vos informations personnelles doivent figurer en haut de la page
                et inclure votre nom, votre numéro de téléphone, votre adresse
                électronique, votre adresse et votre date de naissance
                (facultatif) afin que les employeurs sachent immédiatement qui
                vous êtes et comment vous joindre.
              </p>
            </CvItem>
            <CvItem heading="6. Langues" nom="language">
              <p className="text-justify">
                Vous pouvez inclure des langues que vous parlez. Cela vous
                donnera des points supplémentaires par rapport aux autres
                candidats et pourra vous prêter un emploi. Votre langue doit
                inclure le niveau dans cette langue particulière.
              </p>
            </CvItem>
            <CvItem heading="7. Atouts" nom="Atouts">
              <p className="text-justify">
                Il s'agit d'une section concise mais qui peut très bien
                fonctionner pour vous comprendre. Cela donnera à votre employeur
                un aperçu de vos compétences comportementales telles que :
              </p>
              <ul className="space-y-2">
                <li>• Créativité</li>
                <li>• Leadership</li>
                <li>• Flexibilité</li>
              </ul>
            </CvItem>
            <CvItem heading="8. réseaux sociaux" nom="sociaux">
              <p className="text-justify">
                Il s'agit d'une section de liens externes vers vos profils qui
                aideront votre employeur à voir votre travail pratique, comme
                vous pouvez donner des liens vers votre github où votre
                employeur peut voir à quels projets vous avez contribué, etc.
              </p>
            </CvItem>
          </main>
        </section>
        <section className="rounded-lg bg-blue-100 py-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Besoin d'aide pour créer votre CV?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg">
            Nous proposons des services de relecture et de rédaction de CV pour
            vous assurer que votre candidature se démarque.
          </p>
          <NavLink to="/contact">
            <button className="rounded-[100px] bg-[linear-gradient(94.29deg,#3FB9DF_7.7%,#374AF4_98.45%)] px-10 py-5 text-lg font-semibold text-white shadow-[0px_8px_16px_rgba(0,0,0,0.15)]">
              Contactez-nous
            </button>
          </NavLink>
        </section>
      </main>
    </div>
  );
}

export default CV;

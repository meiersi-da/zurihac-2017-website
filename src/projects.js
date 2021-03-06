import React from 'react';
import styles from './page.css';
import {starIcon, starBorderIcon} from './icons.js';



const projects = [
    // { title: 'Hadrian'
    // , contact: 'Andrey Mokhov'
    // , skillLevel: 'advanced'
    // , homepage: 'https://github.com/snowleopard/hadrian'
    // , children: (
    //     'Hadrian is a new build system for the Glasgow Haskell Compiler. It is based on the Shake library and we hope that it will eventually replace the current make-based build system. You can find more details about the motivation behind this project and our implementation approach in this document.'
    //   )
    // },
    { title: 'Hakyll'
    , contact: 'Jasper Van der Jeugt'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://jaspervdj.be/hakyll/'
    , children: (
        'Hakyll is a Haskell library for generating static sites, mostly aimed at small-to-medium sites and personal blogs. It is written in a very configurable way and uses an xmonad-like DSL for configuration.'
      )
    },
];









const Star = () => (<div className={styles.star}>{starIcon}</div>);
const StarBorder = () => (<div className={styles.star}>{starBorderIcon}</div>);

const SkillLevelBeginnerIcon = () => (<div className={styles.skillLevelIcon}><Star /><StarBorder /><StarBorder /></div>);
const SkillLevelAdvancedIcon = () => (<div className={styles.skillLevelIcon}><Star /><Star /><StarBorder /></div>);
const SkillLevelExpertIcon = () => (<div className={styles.skillLevelIcon}><Star /><Star /><Star /></div>);

const toSkillLevelIcon = skillLevel => {
    switch (skillLevel) {
    case 'beginner': return <SkillLevelBeginnerIcon />
    case 'advanced': return <SkillLevelAdvancedIcon />
    case 'expert':   return <SkillLevelExpertIcon />
    default:         return '?'
    }
}

const Project = ({title, contact, skillLevel, skillLevelTo, homepage, children}) => (
    <div className={styles.project}>
        <div className={styles.projectContact}>{contact}</div>
        <h2 className={styles.projectTitle}>{title}</h2>
        <div className={styles.projectSkillLevel}>
            {toSkillLevelIcon(skillLevel)}
            {skillLevelTo && ' — '}
            {skillLevelTo && toSkillLevelIcon(skillLevelTo)}
        </div>
        <div className={styles.projectHomepage}><a className={styles.projectHomepageLink} href={homepage}>{homepage}</a></div>
        <div>{children}</div>
    </div>
);


export default () => (
    <div className={styles.projects}>
        <h1>Workshops</h1>

        <div className={styles.container}>
            <p>
                In between the talks you can join one of these projects and help the maintainers
                out with bug fixes or new features. We have plenty of space available in 10 separate
                rooms where you can team up with your peers and work on your favourite project.
            </p>
            <p>
                To submit your project, please open a <a href="https://github.com/wereHamster/zurihac">pull request</a>.
            </p>
        </div>

        <div className={styles.projectsLegend}>
            <div className={styles.projectLegendItem}>
                <div className={styles.projectLegendItemLabel}>Beginner</div><SkillLevelBeginnerIcon />
            </div>
            <div className={styles.projectLegendItem}>
                <div className={styles.projectLegendItemLabel}>Advanced</div> <SkillLevelAdvancedIcon />
            </div>
            <div className={styles.projectLegendItem}>
                <div className={styles.projectLegendItemLabel}>Expert</div> <SkillLevelExpertIcon />
            </div>
        </div>

        <div className={styles.projectsContainer}>
            {projects.map((p, i) => <Project key={i} {...p} />)}
        </div>
    </div>
);

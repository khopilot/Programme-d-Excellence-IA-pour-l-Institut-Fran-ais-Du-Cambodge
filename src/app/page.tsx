"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from './page.module.css';
import { FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';

// Your proposal content in markdown
const proposalContent = `# Programme d'Excellence IA pour l'Institut Français du Cambodge
*Innovation - Performance - Leadership*

## Sommaire Exécutif

L'Institut Français du Cambodge se trouve à un moment charnière de sa transformation numérique. Cette proposition détaille un programme d'accompagnement sur mesure qui positionnera votre institution comme pionnière dans l'utilisation de l'intelligence artificielle au sein du réseau culturel français à l'international. Notre approche, basée sur plus de 5 ans d'expertise en transformation numérique d'institutions culturelles, garantit des résultats mesurables et une adoption durable des technologies d'IA.

**Impact attendu :**
- Réduction de 30% du temps consacré aux tâches administratives
- Augmentation de 40% de l'efficacité des processus de communication
- ROI estimé : 3x l'investissement initial sur 12 mois

## 1. Vision et Objectifs

### 1.1 Contexte
L'Institut Français cherche à renforcer son excellence opérationnelle et son leadership dans le paysage culturel international. Si l'utilisation actuelle de l'IA se limite à des outils basiques de rédaction, le potentiel de transformation est considérable.

### 1.2 Objectifs Stratégiques
- Optimiser les processus opérationnels grâce à l'IA
- Développer l'expertise numérique des équipes
- Renforcer le positionnement innovant de l'Institut
- Créer un modèle d'excellence reproductible

## 2. Notre Approche Méthodologique

### Phase 1 : Audit Stratégique et Analysis (5 jours)
**Activités :**
- Diagnostic approfondi des processus par département
- Cartographie des opportunités d'automatisation
- Analyse des gains potentiels
- Workshop collaboratif de priorisation

**Livrables :**
- Rapport d'audit détaillé
- Cartographie des processus optimisables
- Plan de transformation personnalisé
- Dashboard de KPIs

### Phase 2 : Design et Planification (1 semaine)
**Activités :**
- Conception du programme de formation sur mesure
- Développement des modules spécifiques
- Création des supports pédagogiques
- Élaboration du plan d'implémentation

**Livrables :**
- Programme de formation détaillé
- Supports pédagogiques personnalisés
- Guide d'implementation
- Outils d'évaluation

### Phase 3 : Formation Intensive à Siem Reap (2 jours)
**Jour 1 : Fondamentaux et Vision**
- Introduction aux technologies IA
- Ateliers pratiques transversaux
- Cas d'usage et bonnes pratiques
- Méthodologie d'implémentation

**Jour 2 : Expertise et Application**
- Workshops par département
- Mise en situation réelle
- Plan d'action personnalisé
- Mesure des résultats

## 3. Garanties de Succès

### 3.1 Accompagnement Premium
- Support prioritaire pendant 3 mois post-formation
- Sessions de coaching mensuelles
- Accès à notre plateforme de ressources
- Garantie de satisfaction ou remboursement

### 3.2 Mesure de la Performance
- Tableau de bord mensuel des KPIs
- Évaluation continue des compétences
- Ajustements personnalisés si nécessaire

## 4. Investissement et ROI

### 4.1 Tarification
**Investissement : 4000$**
- Paiement en 3 fois :
  - 1333$ à la signature
  - 1333$ après l'audit
  - 1333$ post-formation

## 5. Calendrier d'Exécution

\`\`\`
Mai 2024 :
Semaine 1 : Audit et Analysis
Semaine 2 : Design et Planification
Juin 2024 :
Semaine 1 ou 2 : Formation à Siem Reap (dates à confirmer)
\`\`\`

## 6. Notre Engagement

En tant que partenaire de votre transformation numérique, nous nous engageons à :
- Garantir des résultats mesurables
- Adapter notre approche à vos besoins spécifiques
- Assurer un transfert de compétences durable
- Maintenir une communication transparente

## 7. Prochaines Étapes

1. Réunion de présentation détaillée 
2. Ajustement de la proposition selon vos retours
3. Finalisation des modalités administratives
4. Lancement du programme

## Conclusion

Cette collaboration représente une opportunité unique de positionner l'Institut Français comme leader de l'innovation numérique culturelle. Notre expertise combinée à votre excellence opérationnelle créera un modèle de réussite pour l'ensemble du réseau culturel français.


<div class="cta-container">
  <a class="cta-button" href="https://t.me/+85592332554">
    Passons à l'étape suivante →
  </a>
</div>`;

// Add decorative background pattern
const BackgroundPattern: React.FC = () => (
  <div className={styles.backgroundPattern}>
    <div className={styles.glowOrb} />
    <div className={styles.glowOrb} style={{ left: '70%', animationDelay: '2s' }} />
    <div className={styles.glowOrb} style={{ left: '20%', top: '70%', animationDelay: '4s' }} />
  </div>
);

// Enhanced Table of Contents component
const TableOfContents: React.FC<{ className?: string }> = ({ className }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -35% 0px" }
    );

    const sections = document.querySelectorAll("h1[id], h2[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return null; // Return null on server-side
  }

  const tocItems = [
    { title: "Sommaire Exécutif", id: "programme-dexcellence-ia-pour-linstitut-français-du-cambodge" },
    { title: "1. Vision et Objectifs", id: "1-vision-et-objectifs" },
    { title: "2. Notre Approche Méthodologique", id: "2-notre-approche-méthodologique" },
    { title: "3. Garanties de Succès", id: "3-garanties-de-succès" },
    { title: "4. Investissement et ROI", id: "4-investissement-et-roi" },
    { title: "5. Calendrier d'Exécution", id: "5-calendrier-dexécution" },
    { title: "6. Notre Engagement", id: "6-notre-engagement" },
    { title: "7. Prochaines Étapes", id: "7-prochaines-étapes" },
    { title: "Conclusion", id: "conclusion" },
  ];

  return (
    <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${styles.tableOfContents} ${className}`}
    >
      <div className={styles.tocLogo}>
        <Image
          src="/IFC_Bleu_SS_RVB.png"
          alt="Institut Français Logo"
          width={180}
          height={60}
          className={styles.logo}
        />
      </div>
      <h3 className={styles.tocHeader}>
        Table des Matières
      </h3>
      <ul className={styles.tocList}>
        {tocItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={styles.tocItem}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`${styles.tocLink} ${activeSection === item.id ? styles.tocLinkActive : ''}`}
            >
              {item.title}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={styles.contactInfo}
      >
        <div className={styles.contactLabel}>Contact</div>
        <p className={styles.formateur}>Formateur</p>
        <p className={styles.formateurName}>Nicolas Delrieu</p>
        <div className={styles.socialLinks}>
          {/* GitHub */}
          <a
            href="https://github.com/khopilot"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <div className={`${styles.socialGlow} ${styles.githubGlow}`}></div>
            <div className={styles.socialIcon}>
              <FaGithub className={styles.icon} />
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/+85592332554"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Telegram"
          >
            <div className={`${styles.socialGlow} ${styles.telegramGlow}`}></div>
            <div className={styles.socialIcon}>
              <FaTelegram className={styles.icon} />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nicolas-delrieu-a61a60224"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <div className={`${styles.socialGlow} ${styles.linkedinGlow}`}></div>
            <div className={styles.socialIcon}>
              <FaLinkedin className={styles.icon} />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.aside>
  );
};

// Enhanced ScrollToTop button
const ScrollToTop: React.FC<{ className?: string }> = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isMounted) {
    return null;
  }

  return visible ? (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${styles.scrollToTop} ${className}`}
    >
      ↑
    </motion.button>
  ) : null;
};

type MarkdownProps = {
  children?: React.ReactNode;
  className?: string;
  node?: unknown;
};

const components = {
  h1: ({ children, ...props }: MarkdownProps) => (
    <motion.h1
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.markdownH1}
      {...props}
    >
      {children}
    </motion.h1>
  ),
  h2: ({ children, ...props }: MarkdownProps) => (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.markdownH2}
      {...props}
    >
      {children}
    </motion.h2>
  ),
  h3: ({ children }: MarkdownProps) => (
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.markdownH3}
    >
      {children}
    </motion.h3>
  ),
  p: ({ children }: MarkdownProps) => (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.markdownP}
    >
      {children}
    </motion.p>
  ),
  ul: ({ children }: MarkdownProps) => (
    <ul className={styles.markdownUl}>{children}</ul>
  ),
  li: ({ children }: MarkdownProps) => (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.markdownLi}
    >
      {children}
    </motion.li>
  ),
  code: ({ children }: MarkdownProps) => (
    <code className={styles.markdownCode}>{children}</code>
  ),
  blockquote: ({ children }: MarkdownProps) => (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.markdownBlockquote}
    >
      {children}
    </motion.blockquote>
  ),
  div: ({ className, children }: MarkdownProps & { className?: string }) => {
    if (className === 'cta-container') {
      return (
        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      );
    }
    return <div className={className}>{children}</div>;
  },
  a: ({ href, className, children }: MarkdownProps & { href?: string, className?: string }) => {
    if (className === 'cta-button') {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className ? styles[className] : styles.link}
      >
        {children}
      </a>
    );
  },
};

const Page: React.FC = () => {
  return (
    <div className={`${styles.container} ${styles.smoothScroll}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={styles.hero}
      >
        <BackgroundPattern />
        <motion.div
          className={styles.heroWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left side content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              delay: 0.5 
            }}
            className={`${styles.heroContent} ${styles.floating}`}
          >
            <motion.div 
              className={styles.heroLogo}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Image
                src="/IFC_Bleu_SS_RVB.png"
                alt="Institut Français Logo"
                width={240}
                height={80}
                priority
                className={styles.logoImage}
              />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={styles.heroTitle}
            >
              Programme d&apos;Excellence IA
            </motion.h1>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={styles.heroSubtitle}
            >
              pour l&apos;Institut Français Du Cambodge
            </motion.h2>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className={styles.heroDate}
            >
              24 février 2025
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className={styles.taglineContainer}
            >
              {['Innovation', 'Performance', 'Leadership'].map((tag, index) => (
                <motion.span
                  key={tag}
                  className={styles.tagline}
                  whileHover={{ 
                    scale: 1.1,
                    color: '#fff',
                    textShadow: '0 0 8px rgba(255,255,255,0.8)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.2 }}
                >
                  {tag}
                  {index < 2 && <span className={styles.dot} />}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            className={styles.heroImageWrapper}
            initial={{ scale: 0.9, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              delay: 0.8
            }}
          >
            <Image
              src="/v50HoGkMDHWHSNJO-generated_image.jpg"
              alt="AI Excellence"
              width={600}
              height={400}
              className={styles.heroImage}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className={`${styles.mainGrid} ${styles.mainGridPrint}`}>
        <TableOfContents className={styles.printHidden} />
        <motion.main
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${styles.mainContent} ${styles.mainContentPrint}`}
        >
          <motion.div 
            className={styles.decorativeCorner}
            animate={{
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className={styles.content}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, rehypeRaw]}
              components={components}
              skipHtml={false}
            >
              {proposalContent}
            </ReactMarkdown>
          </div>
        </motion.main>
      </div>

      <ScrollToTop className={styles.printHidden} />
    </div>
  );
};

export default Page;
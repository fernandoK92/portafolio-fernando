import { useEffect, useRef, useState } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiGithub,
  SiPostman,
  SiXampp,
  SiNetlify,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  FiCode,
  FiAward,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiPhone,
  FiArrowUpRight,
  FiDownload,
  FiHome,
  FiUser,
  FiBriefcase,
  FiZap,
  FiFolder,
  FiCheckCircle,
  FiBookOpen,
  FiTarget,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";
import "./App.css";
import {
  perfil,
  tecnologiasHero,
  experiencia,
  skillsIntro,
  stack,
  proyectos,
  proyectosIntro,
  certificados,
} from "./data";

/* ---------------------------------------------------------------------
   Diccionarios de iconos (marca) y colores oficiales aproximados.
   ------------------------------------------------------------------- */
const TECH_ICONS = {
  html: { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
  css: { Icon: SiCss, color: "#1572B6", label: "CSS3" },
  js: { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  ts: { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  react: { Icon: SiReact, color: "#61DAFB", label: "React" },
  node: { Icon: SiNodedotjs, color: "#5FA04E", label: "Node.js" },
  git: { Icon: SiGit, color: "#F05032", label: "Git" },
  python: { Icon: SiPython, color: "#3776AB", label: "Python" },
  docker: { Icon: SiDocker, color: "#2496ED", label: "Docker" },
  postgres: { Icon: SiPostgresql, color: "#4169E1", label: "PostgreSQL" },
  mongo: { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  express: { Icon: SiExpress, color: "#cbd5e1", label: "Express" },
  restapi: { Icon: TbApi, color: "#22d3ee", label: "REST API" },
  github: { Icon: SiGithub, color: "#e6edf3", label: "GitHub" },
  vscode: { Icon: VscVscode, color: "#22A7F0", label: "VS Code" },
  postman: { Icon: SiPostman, color: "#FF6C37", label: "Postman" },
  xampp: { Icon: SiXampp, color: "#FB7A24", label: "XAMPP" },
  netlify: { Icon: SiNetlify, color: "#00C7B7", label: "Netlify" },
};

function TechGlyph({ nombre, size = 22 }) {
  const found = TECH_ICONS[nombre];
  if (!found) {
    return <span className="tech-glyph-fallback">{String(nombre).slice(0, 2)}</span>;
  }
  const { Icon, color, label } = found;
  return <Icon size={size} color={color} title={label} aria-label={label} />;
}

/* ---------------------------------------------------------------------
   Hook: revela un elemento con fade+slide cuando entra en el viewport.
   ------------------------------------------------------------------- */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

const FORMA_ICONS = {
  book: FiBookOpen,
  target: FiTarget,
  chat: FiMessageCircle,
};

/* Convierte "texto con **negrita**" en nodos React. */
function renderBold(str) {
  return String(str)
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
}

/* Panel derecho del inicio: foto + áreas de interés + Descargar CV + forma de trabajar. */
function HeroPanel({ onOpenCv }) {
  const [error, setError] = useState(false);
  const iniciales = perfil.nombre
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="hero-panel">
      <div className="hero-panel-top">
        <div className="hero-panel-photo">
          {perfil.foto && !error ? (
            <img
              src={perfil.foto}
              alt={perfil.nombre}
              onError={() => setError(true)}
              loading="eager"
            />
          ) : (
            <span className="hero-panel-photo-fb">{iniciales}</span>
          )}
        </div>

        <div className="hero-panel-interes">
          <p className="panel-label">Áreas de interés</p>
          <ul className="panel-checklist">
            {perfil.areasInteres.map((a) => (
              <li key={a}>
                <FiCheckCircle size={16} />
                {a}
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-primary" onClick={onOpenCv}>
            Descargar CV <FiDownload size={15} />
          </button>
        </div>
      </div>

      <div className="hero-panel-forma">
        <p className="panel-label">Mi forma de trabajar</p>
        <div className="panel-forma-grid">
          {perfil.formaTrabajar.map((f) => {
            const Icon = FORMA_ICONS[f.icono] || FiTarget;
            return (
              <div className="panel-forma-item" key={f.titulo}>
                <span className="panel-forma-ico">
                  <Icon size={17} />
                </span>
                <h4>{f.titulo}</h4>
                <p>{f.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* Visor del CV dentro del portafolio, con animación de entrada/salida. */
function CvModal({ open, onClose }) {
  const [render, setRender] = useState(open);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (open) {
      setRender(true);
      const t = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(t);
    }
    setShown(false);
    const t = setTimeout(() => setRender(false), 300);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!render) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [render, onClose]);

  if (!render) return null;

  return (
    <div
      className={`cv-overlay${shown ? " is-open" : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Currículum de ${perfil.nombre}`}
    >
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-bar">
          <span className="cv-modal-title">
            <FiCode size={15} /> Currículum — {perfil.nombre}
          </span>
          <div className="cv-modal-tools">
            <a className="cv-modal-dl" href={perfil.cv} download>
              <FiDownload size={14} /> Descargar
            </a>
            <button className="cv-modal-close" onClick={onClose} aria-label="Cerrar">
              <FiX size={18} />
            </button>
          </div>
        </div>
        <div className="cv-modal-body">
          <iframe
            src={`${perfil.cv}#toolbar=0&navpanes=0&view=FitH`}
            title={`Currículum de ${perfil.nombre}`}
          />
        </div>
      </div>
    </div>
  );
}

/* Carrusel infinito de tecnologías (marquee). Se duplica la lista para que
   el bucle sea continuo; se pausa al pasar el mouse. */
function SkillChip({ item, dup }) {
  return (
    <div className="skill-chip" aria-hidden={dup ? "true" : undefined}>
      <span className="skill-chip-icon">
        <TechGlyph nombre={item.icono} size={26} />
      </span>
      <span className="skill-chip-name">{item.nombre}</span>
      <span className="skill-chip-cat">{item.categoria}</span>
    </div>
  );
}

function SkillsMarquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {stack.map((s) => (
          <SkillChip key={s.nombre} item={s} />
        ))}
        {stack.map((s) => (
          <SkillChip key={`dup-${s.nombre}`} item={s} dup />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ p, index }) {
  return (
    <article className="project-card">
      <a
        className="project-thumb"
        href={p.sitio}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visitar ${p.nombre}`}
      >
        {p.imagen && <img src={p.imagen} alt={`Vista previa de ${p.nombre}`} loading="lazy" />}
        <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
      </a>
      <div className="project-body">
        <h3 className="project-name">{p.nombre}</h3>
        <p className="project-desc">{p.descripcion}</p>
        <div className="tag-row">
          {p.tecnologias.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="project-actions">
          {p.sitio && (
            <a
              className="btn btn-primary btn-sm"
              href={p.sitio}
              target="_blank"
              rel="noreferrer"
            >
              Visitar sitio <FiArrowUpRight size={14} />
            </a>
          )}
          {p.repo && (
            <a className="project-repo" href={p.repo} target="_blank" rel="noreferrer">
              Repositorio <FiArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* Certificado en formato carta con inclinación 3D que sigue al cursor.
   Debajo, un botón que abre el PDF. */
function CertCard({ c }) {
  const ref = useRef(null);
  const marca = c.institucion.split("·")[0].trim();
  const esImagen = /\.(jpe?g|png|webp|gif|avif)$/i.test(c.credencial || "");

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${(-py * 12).toFixed(2)}deg) rotateY(${(px * 15).toFixed(2)}deg) translateY(-4px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const inner = esImagen ? (
    <img className="cert-doc-img" src={c.credencial} alt={`Certificado: ${c.nombre}`} loading="lazy" />
  ) : (
    <>
      <div className="cert-doc-top">
        <span className="cert-doc-brand">{marca}</span>
        <span className="cert-doc-seal" aria-hidden="true">
          <FiAward size={16} />
        </span>
      </div>
      <p className="cert-doc-label">Certificado de finalización</p>
      <h3 className="cert-doc-title">{c.nombre}</h3>
      <p className="cert-doc-to">
        otorgado a <strong>{perfil.nombre}</strong>
      </p>
      <div className="cert-doc-meta">
        <span>{c.institucion}</span>
        <span>{c.fecha}</span>
      </div>
    </>
  );

  const docClass = `cert-doc${esImagen ? " cert-doc--image" : ""}`;

  return (
    <div className="cert-item">
      <div className="cert-stage">
        {c.credencial ? (
          <a
            ref={ref}
            className={docClass}
            href={c.credencial}
            target="_blank"
            rel="noreferrer"
            onPointerMove={handleMove}
            onPointerLeave={reset}
            aria-label={`Ver certificado: ${c.nombre}`}
          >
            {inner}
          </a>
        ) : (
          <div ref={ref} className={docClass} onPointerMove={handleMove} onPointerLeave={reset}>
            {inner}
          </div>
        )}
      </div>
      {c.credencial && (
        <a
          className="btn btn-primary btn-sm"
          href={c.credencial}
          target="_blank"
          rel="noreferrer"
        >
          Ver certificado <FiArrowUpRight size={14} />
        </a>
      )}
    </div>
  );
}

/* Miniatura de cada experiencia: logo de empresa, captura, o icono si falta. */
function ExpThumb({ item }) {
  const [error, setError] = useState(false);
  const src = !error ? item.logo || item.imagen : null;
  return (
    <div className={`exp-thumb${src && item.logo ? " exp-thumb--logo" : ""}`}>
      {src ? (
        <img
          src={src}
          alt={item.contexto || item.puesto}
          loading="lazy"
          onError={() => setError(true)}
          style={item.logo && item.logoZoom ? { transform: `scale(${item.logoZoom})` } : undefined}
        />
      ) : (
        <span className="exp-thumb-ph">
          <FiBriefcase size={22} />
        </span>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------------
   Navegación con icono por sección. Al hacer clic, el icono ejecuta una
   animación con "sentido" (la casa salta, la persona saluda, el rayo
   destella, la carpeta se abre, la medalla se balancea, el sobre vuela).
   ------------------------------------------------------------------- */
const NAV_ITEMS = [
  { href: "#inicio", label: "Inicio", Icon: FiHome, anim: "home" },
  { href: "#experiencia", label: "Experiencia", Icon: FiBriefcase, anim: "exp" },
  { href: "#skills", label: "Skills", Icon: FiZap, anim: "skills" },
  { href: "#proyectos", label: "Proyectos", Icon: FiFolder, anim: "projects" },
  { href: "#certificados", label: "Certificados", Icon: FiAward, anim: "certs" },
  { href: "#contacto", label: "Contacto", Icon: FiMail, anim: "contact" },
];

const SECTION_IDS = NAV_ITEMS.map((i) => i.href.slice(1));

/* Detecta qué sección está en el centro de la pantalla (scroll-spy). */
function useActiveSection() {
  const [active, setActive] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

function NavLinks({ className = "nav-links", iconSize = 15, active, onNavigate }) {
  const replay = (e) => {
    const ico = e.currentTarget.querySelector(".nav-ico");
    if (ico) {
      ico.classList.remove("is-anim");
      void ico.offsetWidth; // fuerza reflow para reiniciar la animación
      ico.classList.add("is-anim");
    }
    if (onNavigate) onNavigate();
  };

  return (
    <ul className={className}>
      {NAV_ITEMS.map(({ href, label, Icon, anim }) => {
        const isActive = active === href.slice(1);
        return (
          <li key={href}>
            <a
              href={href}
              data-anim={anim}
              onClick={replay}
              className={isActive ? "is-active" : ""}
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className="nav-ico"
                onAnimationEnd={(e) => e.currentTarget.classList.remove("is-anim")}
              >
                <Icon size={iconSize} />
              </span>
              <span className="nav-label">{label}</span>
              <span className="nav-active-dot" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function SectionHead({ kicker, title }) {
  return (
    <Reveal className="section-head-center">
      <p className="kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      <span className="section-underline" />
    </Reveal>
  );
}

export default function App() {
  const active = useActiveSection();
  const [cvOpen, setCvOpen] = useState(false);
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#inicio" className="nav-brand">
            <FiCode size={18} className="nav-brand-icon" />
            fernando<span>.dev</span>
          </a>
          <NavLinks active={active} />
          <a className="btn btn-primary btn-sm" href={`mailto:${perfil.email}`}>
            Contrátame <FiArrowUpRight size={14} />
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="hero-kicker">{perfil.kicker}</span>
              <h1 className="hero-name">
                <span className="hero-name-1">{perfil.nombreLinea1}</span>
                <span className="hero-name-2">{perfil.nombreLinea2}</span>
              </h1>
              <p className="hero-roles">
                <span>{perfil.rolPrincipal}</span>
                <span className="hero-roles-sep">|</span>
                <span className="accent">{perfil.rolSecundario}</span>
              </p>
              <p className="hero-meta">
                <span className="hero-avail">
                  <span className="hero-avail-dot" /> {perfil.disponible}.
                </span>
                {perfil.experienciaResumen && (
                  <>
                    <span className="hero-meta-sep">|</span>
                    <span>{perfil.experienciaResumen}</span>
                  </>
                )}
              </p>
              <p className="hero-bio">{renderBold(perfil.bio)}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#proyectos">
                  Ver proyectos
                </a>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setCvOpen(true)}
                >
                  Ver Currículum
                </button>
                <a className="btn btn-ghost" href="#contacto">
                  Ver Contacto
                </a>
              </div>
            </div>

            <div className="hero-side">
              <HeroPanel onOpenCv={() => setCvOpen(true)} />
            </div>
          </div>
        </section>

        {/* EXPERIENCIA PROFESIONAL */}
        <section id="experiencia" className="section">
          <div className="wrap">
            <SectionHead kicker="TRAYECTORIA" title="Experiencia en desarrollo de software" />

            <div className="timeline">
              {experiencia.map((e, idx) => (
                <Reveal key={idx}>
                  <article className="exp-item">
                    <span className="exp-dot" aria-hidden="true" />
                    <ExpThumb item={e} />
                    <div className="exp-content">
                      <div className="exp-head">
                        <h3 className="exp-role">{e.puesto}</h3>
                        <span className="exp-badge">{e.periodo}</span>
                      </div>
                      <p className="exp-context">{e.contexto}</p>
                      {e.descripcion && <p className="exp-desc">{e.descripcion}</p>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-alt">
          <div className="wrap">
            <Reveal className="section-head-left">
              <p className="kicker">MIS SKILLS</p>
              <h2 className="section-title">Tecnologías que domino</h2>
              <span className="section-underline" />
              <p className="section-lead">{skillsIntro}</p>
            </Reveal>
          </div>
          <SkillsMarquee />
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="section">
          <div className="wrap">
            <Reveal className="section-head-left">
              <p className="kicker">PROYECTOS DESTACADOS</p>
              <h2 className="section-title">Proyectos en producción</h2>
              <span className="section-underline" />
              <p className="section-lead">{proyectosIntro}</p>
            </Reveal>
            <div className="projects-grid">
              {proyectos.map((p, i) => (
                <Reveal key={p.id}>
                  <ProjectCard p={p} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICADOS */}
        <section id="certificados" className="section section-alt">
          <div className="wrap">
            <SectionHead kicker="FORMACIÓN" title="Certificados y estudios" />
            <div className="cert-grid">
              {certificados.map((c, idx) => (
                <Reveal key={idx}>
                  <CertCard c={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <div className="wrap contact-grid">
            <Reveal>
              <div className="contact-cta">
                <p className="kicker">TRABAJEMOS JUNTOS</p>
                <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
                <p className="section-lead">
                  Siempre estoy abierto a conversar sobre nuevos proyectos y
                  oportunidades. ¡Creemos algo increíble juntos!
                </p>
                <a className="btn btn-primary" href={`mailto:${perfil.email}`}>
                  Hablemos <FiArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="contact-info">
                <p className="kicker">SÍGUEME</p>
                <div className="social-row">
                  {perfil.github && (
                    <a href={perfil.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FiGithub size={18} />
                    </a>
                  )}
                  {perfil.linkedin && (
                    <a href={perfil.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <FiLinkedin size={18} />
                    </a>
                  )}
                  {perfil.twitter && (
                    <a href={perfil.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                      <FiTwitter size={18} />
                    </a>
                  )}
                  {perfil.instagram && (
                    <a href={perfil.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                      <FiInstagram size={18} />
                    </a>
                  )}
                </div>
                <a className="contact-line" href={`mailto:${perfil.email}`}>
                  <FiMail size={16} /> {perfil.email}
                </a>
                {perfil.telefono && (
                  <a className="contact-line" href={`tel:${perfil.telefono.replace(/\s/g, "")}`}>
                    <FiPhone size={16} /> {perfil.telefono}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} {perfil.nombre}. Todos los derechos reservados.
      </footer>

      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}

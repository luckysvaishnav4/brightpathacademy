const fs = require("fs");
const path = require("path");

const root = __dirname;
const write = (file, data) => fs.writeFileSync(path.join(root, file), data);
const mkdir = (dir) => fs.mkdirSync(path.join(root, dir), { recursive: true });

[
  "assets/css",
  "assets/js",
  "assets/bootstrap",
  "assets/jquery",
  "assets/images",
  "assets/icons",
  "assets/animations",
].forEach(mkdir);

const img = {
  hero: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=80",
  campus: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80",
  classroom: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  students: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  lab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=80",
  library: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80",
  sports: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1400&q=80",
  teacher: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
  graduate: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
};

const heroImages = {
  "about.html": img.campus,
  "principal-message.html": img.teacher,
  "director-message.html": img.teacher,
  "faculty.html": img.teacher,
  "academic-programs.html": img.classroom,
  "admissions.html": img.graduate,
  "courses.html": img.lab,
  "facilities.html": img.campus,
  "gallery.html": img.students,
  "events.html": img.sports,
  "results.html": img.graduate,
  "achievements.html": img.students,
  "downloads.html": img.library,
  "career.html": img.campus,
  "faq.html": img.classroom,
  "blog.html": img.library,
  "contact.html": img.campus,
  "privacy-policy.html": img.library,
  "terms-conditions.html": img.library,
  "fee-structure.html": img.classroom,
};

const pages = [
  ["index.html", "Home", "A premium school website for admissions, academics, faculty, facilities, results, and student resources."],
  ["about.html", "About Us", "Learn about our mission, values, campus culture, and student-first educational approach."],
  ["principal-message.html", "Principal Message", "A leadership message about learning, discipline, creativity, and student wellbeing."],
  ["director-message.html", "Director Message", "A vision note from school leadership about excellence, innovation, and trust."],
  ["faculty.html", "Our Faculty", "Meet qualified mentors, teachers, coaches, and academic leaders."],
  ["academic-programs.html", "Academic Programs", "Explore structured academic pathways from foundation years to senior school."],
  ["admissions.html", "Admissions", "Apply online, send an inquiry, understand the process, and review fee details."],
  ["courses.html", "Courses", "Discover enrichment courses in STEM, arts, communication, sports, and career readiness."],
  ["facilities.html", "Facilities", "Explore classrooms, labs, library, sports, transport, safety, and wellness facilities."],
  ["gallery.html", "Gallery", "View moments from classrooms, campus life, events, sports, and achievements."],
  ["events.html", "Events & News", "Stay updated with campus events, notices, announcements, and latest school news."],
  ["results.html", "Results", "Review academic results, exam schedules, calendars, and performance highlights."],
  ["achievements.html", "Student Achievements", "Celebrate academic, cultural, sports, leadership, and innovation achievements."],
  ["downloads.html", "Downloads", "Download prospectus, forms, notices, exam schedules, calendars, and study materials."],
  ["career.html", "Career", "Join our academic, administrative, counseling, sports, and operations teams."],
  ["faq.html", "FAQs", "Find answers to common questions about admissions, academics, fees, and school life."],
  ["blog.html", "Blog", "Read learning insights, parent guides, student success stories, and school updates."],
  ["contact.html", "Contact Us", "Contact admissions, schedule a visit, request a callback, or send an inquiry."],
  ["privacy-policy.html", "Privacy Policy", "Understand how school website and admission information is handled."],
  ["terms-conditions.html", "Terms & Conditions", "Read the website, admissions, downloads, and service terms."],
  ["404.html", "404 Page", "Page not found."],
  ["fee-structure.html", "Fee Structure", "View transparent fee categories for admission, tuition, activities, and transport."],
];

const pageMap = Object.fromEntries(pages.map(([file, title, desc]) => [file, { file, title, desc }]));

const programs = [
  ["Foundation School", "Nursery to Grade 2", "Activity-based language, numeracy, creativity, and social growth."],
  ["Preparatory School", "Grades 3 to 5", "Concept learning, reading practice, projects, art, and digital confidence."],
  ["Middle School", "Grades 6 to 8", "Labs, clubs, inquiry learning, communication, and disciplined study habits."],
  ["Senior School", "Grades 9 to 12", "Board preparation, mentoring, career guidance, and competitive readiness."],
];

const courses = [
  ["STEM & Robotics", "Coding, robotics, electronics, experiments, and innovation challenges.", "bi-cpu"],
  ["Communication Lab", "Public speaking, debate, reading fluency, and creative writing.", "bi-chat-dots"],
  ["Arts & Performance", "Music, dance, theatre, visual art, and creative portfolio building.", "bi-palette"],
  ["Sports Excellence", "Fitness, team games, athletics, yoga, and performance coaching.", "bi-trophy"],
  ["Career Readiness", "Aptitude mapping, counseling, interview skills, and university guidance.", "bi-compass"],
  ["Life Skills", "Leadership, service, collaboration, financial awareness, and wellbeing.", "bi-person-hearts"],
];

const facilities = [
  ["Smart Classrooms", "Digital teaching boards, flexible seating, and collaborative learning spaces.", img.classroom],
  ["Science Laboratories", "Separate senior labs and junior discovery spaces for practical learning.", img.lab],
  ["Library & Media Center", "Reading corners, research support, digital catalog, and quiet study areas.", img.library],
  ["Sports Complex", "Outdoor fields, courts, indoor games, fitness, yoga, and coaching programs.", img.sports],
  ["Safe Transport", "Route planning, trained attendants, GPS monitoring, and parent coordination.", img.campus],
  ["Health & Wellness", "Counseling support, first aid, health checks, and student wellbeing programs.", img.students],
];

const faculty = [
  ["Dr. Asha Mehta", "Principal", "PhD Education, 22 years", "Academic Leadership"],
  ["Rahul Sen", "Mathematics Faculty", "MSc Mathematics, B.Ed", "Mathematics"],
  ["Priya Nair", "English Faculty", "MA English, CELTA", "Languages"],
  ["Arjun Kapoor", "Science Faculty", "MSc Physics", "Science"],
  ["Nisha Verma", "Computer Science Faculty", "MCA, STEM Coach", "Technology"],
  ["Meera Joshi", "Arts Faculty", "MFA Fine Arts", "Creative Arts"],
];

const downloads = [
  ["School Prospectus", "PDF", "3.2 MB"],
  ["Admission Form", "PDF", "820 KB"],
  ["Academic Calendar", "PDF", "1.4 MB"],
  ["Exam Schedule", "PDF", "640 KB"],
  ["Study Material Pack", "ZIP", "12 MB"],
  ["Transport Routes", "PDF", "760 KB"],
];

function head(page) {
  return `<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title} | BrightPath Academy</title>
  <meta name="description" content="${page.desc}">
  <meta name="keywords" content="school, academy, admissions, faculty, courses, education">
  <meta name="author" content="BrightPath Academy">
  <meta property="og:title" content="${page.title} | BrightPath Academy">
  <meta property="og:description" content="${page.desc}">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://images.unsplash.com">
  <link href="assets/bootstrap/bootstrap.min.css" rel="stylesheet">
  <link href="assets/icons/bootstrap-icons.min.css" rel="stylesheet">
  <link href="assets/animations/animate.min.css" rel="stylesheet">
  <link href="assets/animations/aos.css" rel="stylesheet">
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="assets/css/responsive.css" rel="stylesheet">
  <link href="assets/css/animation.css" rel="stylesheet">
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  ${navbar()}
  <main id="main-content">`;
}

function foot() {
  return `  </main>
  ${footer()}
  ${modal()}
  <button class="back-to-top" type="button" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>
  <script src="assets/jquery/jquery.min.js"></script>
  <script src="assets/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="assets/animations/aos.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>`;
}

function shell(file, body) {
  return `${head(pageMap[file])}
${body}
${foot()}`;
}

function navbar() {
  return `<header class="site-header fixed-top">
  <div class="top-strip d-none d-lg-block">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="top-strip-info">
        <span><i class="bi bi-telephone"></i> +91 98765 43210</span>
        <span><i class="bi bi-envelope"></i> admissions@brightpath.edu</span>
      </div>
      <div class="top-strip-info">
        <span><i class="bi bi-clock"></i> Mon-Sat 8:30 AM - 4:30 PM</span>
        <a href="admissions.html">Admissions Open</a>
      </div>
    </div>
  </div>
<nav class="navbar navbar-expand-lg site-navbar" aria-label="Main navigation">
  <div class="container">
    <a class="navbar-brand" href="index.html" aria-label="BrightPath Academy home">
      <img class="brand-logo" src="assets/images/logo.png" alt="BrightPath Academy">
    </a>
    <div class="nav-actions">
      <button class="theme-toggle" type="button" aria-label="Toggle dark mode"><i class="bi bi-moon-stars"></i></button>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item dropdown position-static">
          <a class="nav-link dropdown-toggle" href="about.html" data-bs-toggle="dropdown" aria-expanded="false">Institute</a>
          <div class="dropdown-menu mega-menu">
            <div class="container">
              <div class="row g-4">
                ${megaColumn("About", [["About Us", "about.html"], ["Principal Message", "principal-message.html"], ["Director Message", "director-message.html"], ["Facilities", "facilities.html"]])}
                ${megaColumn("Academics", [["Programs", "academic-programs.html"], ["Courses", "courses.html"], ["Faculty", "faculty.html"], ["Results", "results.html"]])}
                ${megaColumn("Students", [["Achievements", "achievements.html"], ["Downloads", "downloads.html"], ["Events & News", "events.html"], ["Gallery", "gallery.html"]])}
                <div class="col-lg-3">
                  <div class="mega-cta">
                    <span>Admissions Open</span>
                    <p>Book a campus tour and meet our admission counselor.</p>
                    <a class="btn btn-primary btn-sm" href="admissions.html">Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item"><a class="nav-link" href="admissions.html">Admissions</a></li>
        <li class="nav-item"><a class="nav-link" href="courses.html">Courses</a></li>
        <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
</header>`;
}

function megaColumn(title, links) {
  return `<div class="col-lg-3">
    <p class="mega-title">${title}</p>
    ${links.map(([label, href]) => `<a class="dropdown-item" href="${href}">${label}</a>`).join("")}
  </div>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="container">
    <div class="row g-4 align-items-start">
      <div class="col-lg-5">
        <div class="footer-brand"><img class="footer-logo" src="assets/images/logo.png" alt="BrightPath Academy"></div>
        <p class="footer-copy">A modern learning community focused on academics, values, confidence, and student wellbeing.</p>
        <div class="footer-contact">
          <span><i class="bi bi-geo-alt"></i> Knowledge City Campus</span>
          <span><i class="bi bi-telephone"></i> +91 98765 43210</span>
        </div>
      </div>
      <div class="col-6 col-lg-2">
        <h2>Explore</h2>
        <a href="about.html">About</a>
        <a href="academic-programs.html">Programs</a>
        <a href="faculty.html">Faculty</a>
        <a href="facilities.html">Facilities</a>
      </div>
      <div class="col-6 col-lg-2">
        <h2>Students</h2>
        <a href="results.html">Results</a>
        <a href="downloads.html">Downloads</a>
        <a href="achievements.html">Achievements</a>
        <a href="faq.html">FAQs</a>
      </div>
      <div class="col-lg-3">
        <h2>Newsletter</h2>
        <p>Receive school updates, admission alerts, and event notices.</p>
        <form class="newsletter-form needs-validation" novalidate>
          <div class="input-group">
            <input class="form-control" type="email" placeholder="Email address" aria-label="Email address" required>
            <button class="btn btn-secondary" type="submit"><i class="bi bi-send"></i></button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 BrightPath Academy. All rights reserved.</span>
      <span class="footer-legal"><a href="privacy-policy.html">Privacy Policy</a><span>·</span><a href="terms-conditions.html">Terms & Conditions</a></span>
    </div>
  </div>
</footer>`;
}

function modal() {
  return `<div class="modal fade" id="downloadModal" tabindex="-1" aria-labelledby="downloadModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="downloadModalLabel">Request Download</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="needs-validation" novalidate>
        <div class="modal-body">
          <label class="form-label" for="modalEmail">Email address</label>
          <input id="modalEmail" class="form-control" type="email" required>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" type="submit">Send Link</button>
        </div>
      </form>
    </div>
  </div>
</div>`;
}

function hero(title, copy, image = img.campus) {
  return `<section class="page-hero">
  <img src="${image}" alt="${title}" loading="eager">
  <div class="container">
    <div class="page-hero-content">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">${title}</li>
        </ol>
      </nav>
      <h1>${title}</h1>
      <p>${copy}</p>
    </div>
  </div>
</section>`;
}

function section(eyebrow, title, copy, content, soft = false) {
  return `<section class="py-5 ${soft ? "bg-body-tertiary" : ""}">
  <div class="container">
    <div class="section-title" data-aos="fade-up">
      <span>${eyebrow}</span>
      <h2>${title}</h2>
      ${copy ? `<p>${copy}</p>` : ""}
    </div>
    ${content}
  </div>
</section>`;
}

function cta() {
  return `<section class="cta-section">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-lg-8">
        <span>Admissions Open 2026-27</span>
        <h2>Build a confident future with a school that knows every learner.</h2>
      </div>
      <div class="col-lg-4 text-lg-end">
        <a class="btn btn-light btn-lg" href="admissions.html">Apply for Admission</a>
      </div>
    </div>
  </div>
</section>`;
}

function featureCard(icon, title, text) {
  return `<div class="card feature-card h-100">
    <div class="card-body">
      <i class="bi ${icon}"></i>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  </div>`;
}

function programSection() {
  return section("Academic Programs", "Structured learning pathways", "Every stage has a clear academic plan, activities, mentoring, and parent communication.", `<div class="row g-4">
    ${programs.map(([title, level, text]) => `<div class="col-md-6 col-xl-3" data-aos="fade-up">
      <div class="card program-card h-100">
        <div class="card-body">
          <span class="badge text-bg-secondary">${level}</span>
          <h3>${title}</h3>
          <p>${text}</p>
          <a class="link-arrow" href="academic-programs.html">Learn more <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </div>`).join("")}
  </div>`);
}

function coursesSection() {
  return section("Courses", "Skill-building beyond textbooks", "Students explore interests through structured clubs, labs, studios, and mentoring.", `<div class="row g-4">
    ${courses.map(([title, text, icon]) => `<div class="col-md-6 col-lg-4" data-aos="fade-up">${featureCard(icon, title, text)}</div>`).join("")}
  </div>`, true);
}

function facilitiesSection() {
  return section("Facilities", "Campus spaces that support growth", "Modern learning areas, safe operations, and activity spaces help students participate fully.", `<div class="row g-4">
    ${facilities.map(([title, text, image]) => `<div class="col-md-6 col-lg-4" data-aos="fade-up">
      <div class="card image-card h-100">
        <img src="${image}" class="card-img-top" alt="${title}" loading="lazy">
        <div class="card-body">
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
      </div>
    </div>`).join("")}
  </div>`);
}

function facultySection() {
  return section("Faculty", "Qualified educators and mentors", "Faculty profiles include role, qualification, department, and mentoring focus.", `<div class="row g-4">
    ${faculty.slice(0, 4).map(([name, role, qual, dept]) => `<div class="col-sm-6 col-lg-3" data-aos="fade-up">
      <div class="card faculty-card h-100">
        <img src="${img.teacher}" class="card-img-top" alt="${name}" loading="lazy">
        <div class="card-body">
          <span class="badge text-bg-primary">${dept}</span>
          <h3>${name}</h3>
          <p>${role}</p>
          <small>${qual}</small>
        </div>
      </div>
    </div>`).join("")}
  </div>
  <div class="mt-4 text-center"><a class="btn btn-outline-primary" href="faculty.html">View Faculty</a></div>`, true);
}

const contactItems = [
  ["bi-geo-alt", "Visit Campus", "BrightPath Avenue, Knowledge City"],
  ["bi-telephone", "Call Admissions", "+91 98765 43210"],
  ["bi-envelope", "Email Office", "admissions@brightpath.edu"],
  ["bi-clock", "Office Hours", "Mon to Sat, 8:30 AM to 4:30 PM"],
];

function contactCards(layout = "grid") {
  if (layout === "stack") {
    return `<div class="row g-3">
      ${contactItems.map(([icon, title, text]) => `<div class="col-12" data-aos="fade-up">
        <div class="card h-100">
          <div class="card-body d-flex gap-3 align-items-start">
            <i class="bi ${icon} card-icon flex-shrink-0"></i>
            <div>
              <h3>${title}</h3>
              <p>${text}</p>
            </div>
          </div>
        </div>
      </div>`).join("")}
    </div>`;
  }

  return `<div class="row g-4">
    ${contactItems.slice(0, 3).map(([icon, title, text]) => `<div class="col-md-4" data-aos="fade-up">${featureCard(icon, title, text)}</div>`).join("")}
  </div>`;
}

function home() {
  return shell("index.html", `<section class="home-hero">
  <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      ${[
        ["active", img.classroom, "Modern Classrooms", "Smart spaces, trained mentors, and active learning for every stage."],
        ["", img.graduate, "Admissions Open", "Apply for the 2026-27 session and schedule a guided campus tour."],
      ].map(([active, image, title, text]) => `<div class="carousel-item ${active}">
        <img src="${image}" class="d-block w-100" alt="${title}">
        <div class="carousel-caption">
          <span>BrightPath Academy</span>
          <h1>${title}</h1>
          <p>${text}</p>
          <div class="hero-buttons">
            <a class="btn btn-primary btn-lg" href="admissions.html">Apply Now</a>
            <a class="btn btn-outline-light btn-lg" href="contact.html">Book a Visit</a>
          </div>
        </div>
      </div>`).join("")}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></button>
  </div>
</section>
${section("Welcome", "A school built for confident learners", "BrightPath Academy combines strong academics with creativity, discipline, wellbeing, and real-world skills.", `<div class="row align-items-center g-5">
  <div class="col-lg-6" data-aos="fade-right"><img class="rounded-media" src="${img.students}" alt="Students learning together" loading="lazy"></div>
  <div class="col-lg-6" data-aos="fade-left">
    <div class="card h-100"><div class="card-body">
      <h3>We keep learning personal, purposeful, and practical.</h3>
      <p>Students receive classroom instruction, mentoring, activity exposure, and parent communication through a clear academic system.</p>
      <div class="row g-3">
        <div class="col-sm-6">${featureCard("bi-shield-check", "Safe Campus", "Secure operations and student support.")}</div>
        <div class="col-sm-6">${featureCard("bi-lightbulb", "Skill Labs", "Technology, arts, STEM, and leadership.")}</div>
      </div>
    </div></div>
  </div>
</div>`)}
${section("Why Choose Us", "Professional systems, caring mentors", "A complete school experience for academics, confidence, safety, and future readiness.", `<div class="row g-4">
  ${[
    ["bi-award", "Academic Excellence", "Structured teaching, assessments, and result tracking."],
    ["bi-people", "Student Mentoring", "Guidance for learning habits, confidence, and wellbeing."],
    ["bi-building-check", "Modern Campus", "Smart classrooms, labs, library, sports, and safety systems."],
    ["bi-chat-square-heart", "Parent Partnership", "Regular communication, counseling, and progress reviews."],
  ].map(([i, t, c]) => `<div class="col-md-6 col-lg-3" data-aos="fade-up">${featureCard(i, t, c)}</div>`).join("")}
</div>`, true)}
${programSection()}
${coursesSection()}
${facilitiesSection()}
${facultySection()}
${statsSection()}
${achievementsSection()}
${eventsSection()}
${gallerySection()}
${testimonialsSection()}
${cta()}
${section("Contact", "Reach the school office", "Visit the campus, call admissions, or email us for support.", contactCards())}`);
}

function statsSection() {
  return `<section class="stats-section">
  <div class="container">
    <div class="row g-4 text-center">
      ${[["25+", "Years of Excellence"], ["1800+", "Students"], ["120+", "Qualified Staff"], ["96%", "Result Success"]].map(([n, t]) => `<div class="col-6 col-lg-3"><strong>${n}</strong><span>${t}</span></div>`).join("")}
    </div>
  </div>
</section>`;
}

function achievementsSection() {
  return section("Achievements", "Students who participate and lead", "Achievements include academics, innovation, sports, service, debate, and arts.", `<div class="row g-4">
    ${[["National Science Fair", "Students won the regional innovation award."], ["Debate Champions", "Language studio team secured first place."], ["Sports League", "Athletics team earned district medals."]].map(([t, c]) => `<div class="col-md-4" data-aos="fade-up">${featureCard("bi-trophy", t, c)}</div>`).join("")}
  </div>`);
}

function eventsSection() {
  const events = [["24 Jun", "Parent Orientation"], ["08 Jul", "Science Expo"], ["19 Aug", "Inter-House Sports"]];
  return section("Events & News", "Campus calendar and notices", "Stay updated with programs, announcements, and school community news.", `<div class="row g-4">
    <div class="col-lg-6">
      <div class="list-group event-list">${events.map(([d, t]) => `<a class="list-group-item list-group-item-action" href="events.html"><span>${d}</span><strong>${t}</strong><p>Upcoming campus event with student participation and parent updates.</p></a>`).join("")}</div>
    </div>
    <div class="col-lg-6">
      <div class="accordion" id="newsAccordion">
        ${["Board Results Announced", "New Robotics Lab", "Scholarship Window"].map((t, i) => `<div class="accordion-item">
          <h3 class="accordion-header"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#news${i}">${t}</button></h3>
          <div id="news${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#newsAccordion"><div class="accordion-body">Important update for students and families.</div></div>
        </div>`).join("")}
      </div>
    </div>
  </div>`, true);
}

function gallerySection() {
  const images = [img.campus, img.classroom, img.lab, img.library, img.sports, img.graduate];
  return section("Gallery", "Campus life in pictures", "Classrooms, labs, events, sports, celebrations, and everyday learning moments.", `<div class="row g-3">
    ${images.map((image, i) => `<div class="col-6 col-lg-4" data-aos="zoom-in"><a class="gallery-item" href="gallery.html"><img src="${image}" alt="Gallery image ${i + 1}" loading="lazy"></a></div>`).join("")}
  </div>`);
}

function testimonialsSection() {
  return section("Testimonials", "Trusted by families", "Parents and alumni value our academic clarity, safe systems, and caring mentors.", `<div class="row g-4">
    ${[["Anita Rao", "Parent", "Teachers communicate clearly and know my child well."], ["Kabir Shah", "Alumnus", "The school helped me build discipline and confidence."], ["Fatima Khan", "Parent", "The campus feels organized, safe, and ambitious."]].map(([n, r, c]) => `<div class="col-md-4" data-aos="fade-up"><div class="card h-100"><div class="card-body"><i class="bi bi-quote card-icon"></i><p>${c}</p><strong>${n}</strong><span class="d-block text-secondary">${r}</span></div></div></div>`).join("")}
  </div>`, true);
}

function about() {
  return shell("about.html", `${hero("About Us", pageMap["about.html"].desc, img.campus)}
${section("About BrightPath", "Education with clarity, care, and ambition", "We combine disciplined academics with exploration, values, creativity, and wellbeing.", `<div class="row align-items-center g-5">
  <div class="col-lg-6"><img class="rounded-media" src="${img.campus}" alt="School campus" loading="lazy"></div>
  <div class="col-lg-6"><div class="card h-100"><div class="card-body"><h3>Our purpose is simple.</h3><p>Every student should feel known, supported, challenged, and prepared for the future. Our systems help teachers track progress, parents stay informed, and students build strong habits.</p><a class="btn btn-primary" href="contact.html">Visit Campus</a></div></div></div>
</div>`)}
${section("Foundation", "Mission, vision, and values", "A clear philosophy keeps every classroom and program aligned.", `<div class="row g-4">
  ${[["Mission", "To nurture lifelong learners who think clearly, act ethically, and serve confidently."], ["Vision", "To be a trusted institute where modern education meets strong values."], ["Values", "Curiosity, respect, resilience, integrity, collaboration, and service."]].map(([t, c]) => `<div class="col-md-4" data-aos="fade-up">${featureCard("bi-check2-circle", t, c)}</div>`).join("")}
</div>`, true)}
${statsSection()}${cta()}`);
}

function message(file, person, role) {
  return shell(file, `${hero(pageMap[file].title, pageMap[file].desc, img.teacher)}
${section(role, person, "Leadership that keeps students at the center of every decision.", `<div class="row align-items-center g-5">
  <div class="col-lg-5"><img class="rounded-media" src="${img.teacher}" alt="${person}" loading="lazy"></div>
  <div class="col-lg-7"><div class="card h-100"><div class="card-body"><p>Education works best when high standards are paired with care. At BrightPath Academy, we help students learn with discipline, question with confidence, and participate with responsibility.</p><p>Our teachers, parents, and school teams work together so every learner is noticed, guided, and challenged.</p><a class="btn btn-primary" href="contact.html">Schedule a Visit</a></div></div></div>
</div>`)}${cta()}`);
}

function facultyPage() {
  return shell("faculty.html", `${hero("Our Faculty", pageMap["faculty.html"].desc, img.teacher)}
${section("Faculty Profiles", "Experienced teachers by department", "Profiles include role, qualification, department, and mentor group.", `<div class="table-responsive"><table class="table table-hover align-middle"><thead><tr><th>Name</th><th>Role</th><th>Qualification</th><th>Department</th></tr></thead><tbody>${faculty.map(([n, r, q, d]) => `<tr><td>${n}</td><td>${r}</td><td>${q}</td><td>${d}</td></tr>`).join("")}</tbody></table></div>`)}
${facultySection()}`);
}

function admissionsPage() {
  return shell("admissions.html", `${hero("Admissions", pageMap["admissions.html"].desc, img.graduate)}
${section("Admissions Desk", "Start your application", "Use the full admission form or send a quick inquiry to speak with a counselor.", `<div class="row g-4">
  <div class="col-lg-7"><div class="card h-100"><div class="card-body"><h3>Online Admission Form</h3><p>Share student and parent details. Our team will guide you through documents, dates, and next steps.</p>${form("admission")}</div></div></div>
  <div class="col-lg-5"><div class="card h-100"><div class="card-body"><h3>Admission Inquiry</h3><p>Ask about grades, fees, transport, campus visits, or programs.</p>${form("inquiry", true)}<button class="btn btn-secondary w-100 mt-3" type="button" data-bs-toggle="modal" data-bs-target="#downloadModal"><i class="bi bi-download"></i> Download Prospectus</button></div></div></div>
</div>`)}
${section("Admission Process", "Simple, transparent, guided", "Our admission team supports families from inquiry to onboarding.", `<div class="row g-4 justify-content-center">
  ${["Inquiry & Campus Tour", "Application Submission", "Interaction & Assessment", "Offer & Fee Payment", "Orientation"].map((t, i) => `<div class="col-md-6 col-lg-4" data-aos="fade-up">${featureCard("bi-" + (i + 1) + "-circle", t, "Clear next steps, document guidance, dates, and counselor support.")}</div>`).join("")}
</div>`, true)}
${feeSection()}${cta()}`);
}

function form(prefix, compact = false) {
  const cls = compact ? "col-sm-6 col-lg-12 col-xl-6" : "col-md-6";
  return `<form class="row g-3 needs-validation" novalidate>
    <div class="${cls}"><label class="form-label" for="${prefix}Name">Student name</label><input id="${prefix}Name" class="form-control" required></div>
    <div class="${cls}"><label class="form-label" for="${prefix}Grade">Applying for grade</label><select id="${prefix}Grade" class="form-select" required><option value="">Choose...</option><option>Nursery</option><option>Grade 1-5</option><option>Grade 6-8</option><option>Grade 9-12</option></select></div>
    <div class="${cls}"><label class="form-label" for="${prefix}Parent">Parent name</label><input id="${prefix}Parent" class="form-control" required></div>
    <div class="${cls}"><label class="form-label" for="${prefix}Phone">Phone</label><input id="${prefix}Phone" class="form-control" required></div>
    <div class="col-12"><label class="form-label" for="${prefix}Message">Message</label><textarea id="${prefix}Message" class="form-control" rows="4"></textarea></div>
    <div class="col-12"><button class="btn btn-primary" type="submit">Submit Request</button></div>
  </form>`;
}

function feeSection() {
  return section("Fee Structure", "Clear annual planning", "Indicative fee categories for families. Contact admissions for grade-wise details.", `<div class="table-responsive"><table class="table table-striped table-hover align-middle"><thead><tr><th>Category</th><th>Frequency</th><th>Includes</th></tr></thead><tbody><tr><td>Admission Fee</td><td>One-time</td><td>Enrollment processing and student kit</td></tr><tr><td>Tuition Fee</td><td>Quarterly</td><td>Academic instruction and assessments</td></tr><tr><td>Activity Fee</td><td>Annual</td><td>Clubs, events, sports, and enrichment</td></tr><tr><td>Transport Fee</td><td>Optional</td><td>Route-based school bus facility</td></tr></tbody></table></div><div class="mt-4 text-center"><a class="btn btn-outline-primary" href="fee-structure.html">View Detailed Fees</a></div>`);
}

function simple(file, content) {
  return shell(file, `${hero(pageMap[file].title, pageMap[file].desc, heroImages[file] || img.campus)}${content}`);
}

function resultsPage() {
  return shell("results.html", `${hero("Results", pageMap["results.html"].desc, img.graduate)}
${section("Results", "Performance at a glance", "Review academic outcomes and student resource links.", `<div class="table-responsive"><table class="table table-hover align-middle"><thead><tr><th>Class</th><th>Top Score</th><th>Pass Rate</th><th>Report</th></tr></thead><tbody><tr><td>Grade 10</td><td>98.6%</td><td>100%</td><td><a href="downloads.html">Download</a></td></tr><tr><td>Grade 12 Science</td><td>97.8%</td><td>99%</td><td><a href="downloads.html">Download</a></td></tr><tr><td>Grade 12 Commerce</td><td>96.4%</td><td>98%</td><td><a href="downloads.html">Download</a></td></tr></tbody></table></div>`)}
${studentResources()}`);
}

function studentResources() {
  return section("Student Resources", "Calendar, exams, materials, and notices", "Everything students need for academic planning and preparation.", `<div class="row g-4">${["Academic Calendar", "Exam Schedule", "Study Materials", "Notices & Announcements"].map((t, i) => `<div class="col-md-6 col-lg-3" data-aos="fade-up">${featureCard(["bi-calendar-event", "bi-journal-check", "bi-book", "bi-megaphone"][i], t, "Updated files are available in the downloads center.")}</div>`).join("")}</div>`, true);
}

function downloadsPage() {
  return shell("downloads.html", `${hero("Downloads", pageMap["downloads.html"].desc, img.library)}
${section("Downloads", "Important school files", "Fast access to forms, calendars, schedules, and learning materials.", `<div class="row g-4">${downloads.map(([t, type, size]) => `<div class="col-md-6 col-lg-4" data-aos="fade-up"><div class="card h-100"><div class="card-body"><i class="bi bi-file-earmark-arrow-down card-icon"></i><h3>${t}</h3><p>${type} · ${size}</p><button class="btn btn-outline-primary btn-sm mt-3" type="button" data-bs-toggle="modal" data-bs-target="#downloadModal">Download</button></div></div></div>`).join("")}</div>`)}
${studentResources()}`);
}

function contactPage() {
  return shell("contact.html", `${hero("Contact Us", pageMap["contact.html"].desc, img.campus)}
${section("Contact", "Reach the school office", "Send an inquiry, schedule a campus visit, or contact admissions.", `<div class="row g-5">
  <div class="col-lg-5">${contactCards("stack")}</div>
  <div class="col-lg-7"><div class="card"><div class="card-body"><h3>Send Inquiry</h3><p>Our team will respond with clear next steps.</p>${form("contact")}</div></div></div>
</div>`)}`);
}

function faqPage() {
  const faqs = [["What curriculum do you follow?", "We follow a structured national curriculum with enrichment in STEM, communication, arts, sports, and life skills."], ["How do admissions work?", "Families submit an inquiry, visit campus, complete the application, and attend an age-appropriate interaction."], ["Is transport available?", "Yes. Route-based transport is available with monitoring and trained attendants."], ["Where are notices and materials?", "Results, notices, calendars, schedules, and study materials are available in downloads and student resources."]];
  return shell("faq.html", `${hero("FAQs", pageMap["faq.html"].desc, img.classroom)}
${section("FAQs", "Helpful answers for families", "Clear answers about admissions, academics, fees, safety, and student resources.", `<div class="accordion" id="faqAccordion">${faqs.map(([q, a], i) => `<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}">${q}</button></h2><div id="faq${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#faqAccordion"><div class="accordion-body">${a}</div></div></div>`).join("")}</div>`)}`);
}

function blogPage() {
  return shell("blog.html", `${hero("Blog", pageMap["blog.html"].desc, img.library)}
${section("Blog", "Learning ideas and school stories", "Insights for parents, students, educators, and the school community.", `<div class="row g-4">${["Building Better Study Habits", "How Project Learning Builds Confidence", "A Parent Guide to Senior School"].map((t, i) => `<div class="col-md-4" data-aos="fade-up"><article id="article-${i + 1}" class="card image-card h-100"><img src="${[img.students, img.lab, img.classroom][i]}" class="card-img-top" alt="${t}" loading="lazy"><div class="card-body"><span class="badge text-bg-secondary">Education</span><h3>${t}</h3><p>Practical school-tested ideas for balanced, confident learning.</p><a class="link-arrow" href="blog.html#article-${i + 1}">Read article <i class="bi bi-arrow-right"></i></a></div></article></div>`).join("")}</div>`)}`);
}

function careerPage() {
  return shell("career.html", `${hero("Career", pageMap["career.html"].desc, img.campus)}
${section("Careers", "Shape tomorrow with us", "We welcome teachers, counselors, coaches, librarians, administrators, and operations professionals.", `<div class="row g-4">${["Mathematics Teacher", "School Counselor", "Sports Coach", "Admissions Executive"].map((t) => `<div class="col-md-6" data-aos="fade-up"><div class="card h-100"><div class="card-body"><h3>${t}</h3><p>Full-time role with professional development and a collaborative school culture.</p><a class="btn btn-outline-primary btn-sm" href="contact.html">Apply</a></div></div></div>`).join("")}</div>`)}`);
}

function policyPage(file) {
  const items = file.includes("privacy") ? ["Information We Collect", "How We Use Data", "Student Privacy", "Contact Preferences"] : ["Website Use", "Admissions Information", "Downloads", "Limitation of Liability"];
  return shell(file, `${hero(pageMap[file].title, pageMap[file].desc, img.library)}
<section class="py-5"><div class="container"><div class="card mx-auto article-card"><div class="card-body">${items.map((t) => `<h2>${t}</h2><p>BrightPath Academy maintains transparent, respectful, and secure processes for families, students, staff, and website visitors. Information shared through forms is used only for relevant school communication and service support.</p>`).join("")}</div></div></div></section>`);
}

function notFound() {
  return shell("404.html", `<section class="not-found"><div class="container text-center"><span>404</span><h1>Page not found</h1><p>The page may have moved. Return to the homepage or contact the school office.</p><a class="btn btn-primary" href="index.html">Go Home</a></div></section>`);
}

const output = {
  "index.html": home(),
  "about.html": about(),
  "principal-message.html": message("principal-message.html", "Dr. Asha Mehta", "Principal Message"),
  "director-message.html": message("director-message.html", "Mr. Dev Malhotra", "Director Message"),
  "faculty.html": facultyPage(),
  "academic-programs.html": simple("academic-programs.html", `${programSection()}${studentResources()}${cta()}`),
  "admissions.html": admissionsPage(),
  "courses.html": simple("courses.html", `${coursesSection()}${cta()}`),
  "facilities.html": simple("facilities.html", `${facilitiesSection()}${cta()}`),
  "gallery.html": simple("gallery.html", `${gallerySection()}${cta()}`),
  "events.html": simple("events.html", `${eventsSection()}${cta()}`),
  "results.html": resultsPage(),
  "achievements.html": simple("achievements.html", `${achievementsSection()}${cta()}`),
  "downloads.html": downloadsPage(),
  "career.html": careerPage(),
  "faq.html": faqPage(),
  "blog.html": blogPage(),
  "contact.html": contactPage(),
  "privacy-policy.html": policyPage("privacy-policy.html"),
  "terms-conditions.html": policyPage("terms-conditions.html"),
  "404.html": notFound(),
  "fee-structure.html": simple("fee-structure.html", `${feeSection()}${cta()}`),
};

for (const [file, html] of Object.entries(output)) write(file, html);

write("assets/css/style.css", `:root {
  --primary-color: #005aa6;
  --secondary-color: #f59e0b;
  --text-color: #102a43;
  --page-bg: #ffffff;
  --surface-bg: #f6f9fc;
  --card-bg: #ffffff;
  --muted-color: #5c6b78;
  --border-color: #dce6f0;
  --light-color: #ffffff;
  --hero-overlay: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.16));
  --shadow-color: rgba(0, 90, 166, 0.16);
  --primary-soft: rgba(0, 90, 166, 0.1);
  --secondary-soft: rgba(245, 158, 11, 0.14);
  --bs-primary: var(--primary-color);
  --bs-secondary: var(--secondary-color);
  --bs-body-color: var(--text-color);
  --bs-body-bg: var(--page-bg);
  --bs-heading-color: var(--text-color);
  --bs-tertiary-bg: var(--surface-bg);
  --bs-card-bg: var(--card-bg);
  --bs-card-color: var(--text-color);
  --bs-border-color: var(--border-color);
  --bs-link-color: var(--primary-color);
  --bs-link-hover-color: var(--secondary-color);
}

[data-theme="dark"] {
  --text-color: #f4f8fb;
  --page-bg: #101820;
  --surface-bg: #162231;
  --card-bg: #1d2b3a;
  --muted-color: #b7c4cf;
  --border-color: #33485d;
  --hero-overlay: linear-gradient(90deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.18));
  --shadow-color: rgba(0, 0, 0, 0.32);
  --primary-soft: rgba(0, 90, 166, 0.28);
  --secondary-soft: rgba(245, 158, 11, 0.2);
  --bs-body-color: var(--text-color);
  --bs-body-bg: var(--page-bg);
  --bs-heading-color: var(--text-color);
  --bs-tertiary-bg: var(--surface-bg);
  --bs-card-bg: var(--card-bg);
  --bs-card-color: var(--text-color);
  --bs-border-color: var(--border-color);
  --bs-table-color: var(--text-color);
  --bs-table-bg: var(--card-bg);
}

* { box-sizing: border-box; }
html, body { overflow-x: hidden; }
body {
  margin: 0;
  color: var(--text-color);
  background: var(--page-bg);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.65;
}
a { color: var(--primary-color); text-decoration: none; }
a:hover { color: var(--secondary-color); }
p { color: var(--muted-color); margin-bottom: 1rem; }
h1, h2, h3, h4, h5, h6 { color: var(--text-color); font-weight: 850; letter-spacing: 0; }
.skip-link { position: absolute; top: -4rem; left: 1rem; z-index: 2000; padding: .75rem 1rem; background: var(--primary-color); color: var(--light-color); }
.skip-link:focus { top: 1rem; }

.site-header {
  z-index: 1030;
  background: var(--card-bg);
  box-shadow: 0 .75rem 2rem var(--shadow-color);
}
.top-strip {
  background: var(--primary-color);
  color: var(--light-color);
  font-size: .88rem;
  padding: .45rem 0;
}
.top-strip-info {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.top-strip a,
.top-strip span {
  color: var(--light-color);
  font-weight: 650;
}
.top-strip i {
  margin-right: .35rem;
}
.site-navbar {
  background: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
}
.site-navbar > .container { display: flex; align-items: center; flex-wrap: wrap; }
.navbar-brand, .footer-brand { display: inline-flex; align-items: center; color: var(--text-color); font-weight: 900; }
.navbar-brand {
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 0;
  box-shadow: none;
}
.brand-logo { width: 11rem; height: 4.9rem; object-fit: contain; object-position: left center; }
.footer-logo { width: auto; max-width: 15rem; height: auto; max-height: 7rem; object-fit: contain; }
.footer-brand { background: var(--light-color); border-radius: .75rem; padding: .45rem .75rem; width: fit-content; }
.brand-icon { width: 2.85rem; height: 2.85rem; display: inline-grid; place-items: center; border-radius: .8rem; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: var(--light-color); box-shadow: 0 .7rem 1.5rem var(--shadow-color); }
.nav-actions { display: flex; align-items: center; gap: .5rem; order: 2; margin-left: auto; }
.navbar-collapse { order: 3; }
.nav-link {
  color: var(--text-color);
  font-weight: 800;
  border-radius: 0;
  padding: .55rem .85rem;
  margin: 0 .08rem;
  position: relative;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: .85rem;
  right: .85rem;
  bottom: .25rem;
  height: .16rem;
  border-radius: 1rem;
  background: var(--secondary-color);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .2s ease;
}
.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: var(--primary-color);
  background: transparent;
}
.site-navbar .navbar-nav .nav-link.active {
  color: var(--primary-color);
  background: transparent;
}
.site-navbar .navbar-nav .nav-link.active::after {
  transform: scaleX(1);
}
.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
  transform: scaleX(1);
}
.theme-toggle, .back-to-top {
  width: 2.6rem;
  height: 2.6rem;
  display: inline-grid;
  place-items: center;
  border: 1px solid var(--border-color);
  border-radius: .5rem;
  background: var(--card-bg);
  color: var(--text-color);
}
.theme-toggle,
.navbar-toggler { box-shadow: 0 .35rem 1rem var(--shadow-color); }
.navbar-toggler { border-color: var(--border-color); border-radius: .65rem; padding: .55rem .65rem; }
.navbar-toggler:focus { box-shadow: 0 0 0 .2rem var(--primary-soft); }
.btn-primary {
  --bs-btn-bg: var(--primary-color);
  --bs-btn-border-color: var(--primary-color);
  --bs-btn-hover-bg: var(--secondary-color);
  --bs-btn-hover-border-color: var(--secondary-color);
  --bs-btn-color: var(--light-color);
  --bs-btn-hover-color: var(--light-color);
}
.btn-secondary {
  --bs-btn-bg: var(--secondary-color);
  --bs-btn-border-color: var(--secondary-color);
  --bs-btn-hover-bg: var(--primary-color);
  --bs-btn-hover-border-color: var(--primary-color);
  --bs-btn-color: var(--light-color);
  --bs-btn-hover-color: var(--light-color);
}
.btn-outline-primary {
  --bs-btn-color: var(--primary-color);
  --bs-btn-border-color: var(--primary-color);
  --bs-btn-hover-bg: var(--primary-color);
  --bs-btn-hover-border-color: var(--primary-color);
  --bs-btn-hover-color: var(--light-color);
}
.mega-menu { width: 100%; left: 0; right: 0; padding: 1.5rem 0; border: 0; border-radius: 0 0 1rem 1rem; background: var(--card-bg); box-shadow: 0 1.25rem 3rem var(--shadow-color); }
.mega-title { color: var(--secondary-color); font-weight: 850; margin-bottom: .5rem; }
.dropdown-item { color: var(--text-color); border-radius: .4rem; padding: .5rem .75rem; }
.dropdown-item:hover { background: var(--primary-soft); color: var(--primary-color); }
.mega-cta { background: var(--surface-bg); border: 1px solid var(--border-color); border-radius: .6rem; padding: 1rem; }
.mega-cta span { color: var(--secondary-color); font-weight: 850; }

.home-hero, .home-hero .carousel-item, .home-hero img { min-height: 100vh; }
.home-hero img { height: 100vh; object-fit: cover; }
.carousel-item::after, .page-hero::after { content: ""; position: absolute; inset: 0; background: var(--hero-overlay); }
.carousel-caption { z-index: 2; top: 53%; bottom: auto; left: 8%; right: 8%; transform: translateY(-50%); text-align: left; max-width: 760px; }
.carousel-caption span, .page-hero-content span, .section-title span, .cta-section span, .not-found span {
  display: inline-block;
  color: var(--secondary-color);
  font-size: .78rem;
  font-weight: 850;
  letter-spacing: .08rem;
  text-transform: uppercase;
}
.carousel-caption h1, .page-hero h1, .not-found h1 {
  color: var(--light-color);
  font-size: clamp(2.6rem, 7vw, 5.75rem);
  line-height: 1;
  margin: .7rem 0 1rem;
}
.carousel-caption p, .page-hero p, .not-found p { color: var(--light-color); font-size: 1.15rem; max-width: 680px; }
.hero-buttons { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; }

.page-hero { position: relative; min-height: 50vh; display: flex; align-items: end; padding: 8rem 0 4rem; overflow: hidden; }
.page-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: saturate(1.05) contrast(1.02); }
.page-hero-content { position: relative; z-index: 2; max-width: 800px; }
.breadcrumb a, .breadcrumb-item, .breadcrumb-item.active, .breadcrumb-item + .breadcrumb-item::before { color: var(--light-color); }

.section { padding: 5rem 0; overflow-x: clip; }
.section-soft { background: var(--surface-bg); }
.section-title { max-width: 760px; margin: 0 auto 2.5rem; text-align: center; }
.section-title h2 { font-size: clamp(1.8rem, 3vw, 2.6rem); line-height: 1.1; margin: .45rem 0 .75rem; }
.section-title p { max-width: 680px; margin: 0 auto; font-size: 1.04rem; }
.section-action { margin-top: 2rem; text-align: center; }

.rounded-media { width: 100%; min-height: 360px; object-fit: cover; border-radius: .75rem; box-shadow: 0 1rem 2.5rem var(--shadow-color); }
.content-panel, .form-panel, .download-card, .career-card, .testimonial-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: .65rem;
  padding: 1.5rem;
  box-shadow: 0 .75rem 2rem var(--shadow-color);
}
.content-panel h3, .form-panel h3 { font-size: 1.35rem; margin-bottom: .75rem; }
.card, .accordion-item, .list-group-item, .modal-content, .form-control, .form-select, .table {
  background-color: var(--card-bg);
  color: var(--text-color);
  border-color: var(--border-color);
}
.card-title,
.card h2,
.card h3,
.section-title h2,
.content-panel h3,
.form-panel h3 {
  color: var(--text-color);
}
.card, .feature-card, .program-card, .image-card, .faculty-card {
  border: 1px solid var(--border-color);
  border-radius: .65rem;
  box-shadow: 0 .75rem 2rem var(--shadow-color);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.card:hover, .download-card:hover, .career-card:hover, .testimonial-card:hover {
  transform: translateY(-.3rem);
  border-color: var(--primary-color);
  box-shadow: 0 1.1rem 2.75rem var(--shadow-color);
}
.card-body { padding: 1.35rem; }
.feature-card .card-body, .program-card .card-body, .download-card, .career-card, .testimonial-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.feature-card i, .download-card i, .testimonial-card i {
  width: 3rem;
  height: 3rem;
  display: inline-grid;
  place-items: center;
  border-radius: .55rem;
  background: var(--primary-soft);
  color: var(--primary-color);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.card-icon {
  width: 3rem;
  height: 3rem;
  display: inline-grid;
  place-items: center;
  border-radius: .55rem;
  background: var(--primary-soft);
  color: var(--primary-color);
  font-size: 1.3rem;
}
.card h2, .card h3, .download-card h3, .career-card h3, .testimonial-card strong {
  font-size: 1.16rem;
  line-height: 1.28;
  margin-bottom: .6rem;
}
.card p, .download-card p, .career-card p, .testimonial-card p, .event-list p { margin-bottom: 0; }
.faculty-card small { color: var(--muted-color); }
.image-card img, .faculty-card img { height: 220px; object-fit: cover; border-radius: .65rem .65rem 0 0; }
.gallery-item { display: block; overflow: hidden; border-radius: .65rem; border: 1px solid var(--border-color); }
.gallery-item img { width: 100%; height: 250px; object-fit: cover; transition: transform .35s ease; }
.gallery-item:hover img { transform: scale(1.05); }

.stats-section, .cta-section, .site-footer {
  background: var(--primary-color);
  color: var(--light-color);
  padding: 4rem 0;
}
.stats-section strong { display: block; color: var(--light-color); font-size: clamp(2rem, 4vw, 3.25rem); font-weight: 900; }
.stats-section span, .cta-section h2, .cta-section span, .site-footer, .site-footer p, .site-footer a, .site-footer h2, .footer-brand { color: var(--light-color); }
.cta-section h2 { font-size: clamp(1.7rem, 3vw, 2.6rem); }
.cta-section .btn-light { color: var(--primary-color); background: var(--light-color); border-color: var(--light-color); }

.event-list .list-group-item { padding: 1rem 1.15rem; }
.event-list span { color: var(--primary-color); font-weight: 850; }
.event-list strong { display: block; color: var(--text-color); margin: .15rem 0; }
.accordion-header { font-size: 1rem; line-height: 1.2; }
.accordion-button { color: var(--text-color); background: var(--card-bg); font-weight: 750; }
.accordion-button:not(.collapsed) { color: var(--primary-color); background: var(--primary-soft); }
.accordion-body { color: var(--muted-color); }
.list-group-item strong,
.table td,
.table th,
.form-label,
.modal-title {
  color: var(--text-color);
}

.form-label { color: var(--text-color); font-weight: 700; margin-bottom: .4rem; }
.form-control, .form-select { min-height: 2.75rem; border-radius: .48rem; }
textarea.form-control { min-height: 7rem; }
.form-control:focus, .form-select:focus { border-color: var(--primary-color); box-shadow: 0 0 0 .25rem var(--primary-soft); }
.data-table { border: 1px solid var(--border-color); border-radius: .65rem; overflow: hidden; box-shadow: 0 .75rem 2rem var(--shadow-color); }
.table { margin-bottom: 0; --bs-table-bg: var(--card-bg); --bs-table-color: var(--text-color); --bs-table-border-color: var(--border-color); --bs-table-striped-bg: var(--surface-bg); --bs-table-hover-bg: var(--primary-soft); }
.table thead th { background: var(--primary-color); color: var(--light-color); }
.article-content { max-width: 860px; margin: 0 auto; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: .65rem; padding: 2rem; box-shadow: 0 .75rem 2rem var(--shadow-color); }
.article-content h2 { font-size: 1.35rem; margin: 1.75rem 0 .65rem; }
.article-content h2:first-child { margin-top: 0; }

.site-footer { padding: 3.5rem 0 1.25rem; }
.site-footer h2 { font-size: 1rem; margin-bottom: .85rem; }
.site-footer a { display: block; margin: .35rem 0; opacity: .92; }
.site-footer a:hover { opacity: 1; color: var(--light-color); }
.footer-copy { max-width: 34rem; margin: .85rem 0; }
.footer-contact { display: flex; flex-wrap: wrap; gap: .75rem 1.25rem; color: var(--light-color); font-weight: 650; }
.footer-contact i { margin-right: .35rem; }
.footer-bottom { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; border-top: 1px solid var(--light-color); margin-top: 2rem; padding-top: 1.25rem; }
.footer-legal { display: inline-flex; align-items: center; gap: .5rem; white-space: nowrap; }
.site-footer .footer-legal a { display: inline-flex; margin: 0; }
.back-to-top { position: fixed; right: 1rem; bottom: 1rem; z-index: 1000; opacity: 0; pointer-events: none; transform: translateY(1rem); }
.back-to-top.show { opacity: 1; pointer-events: auto; transform: translateY(0); }
.not-found { min-height: 100vh; display: grid; place-items: center; background: var(--primary-color); padding: 7rem 0; }
.not-found p { margin-left: auto; margin-right: auto; }
.floating-toast { position: fixed; left: 50%; bottom: 1.25rem; transform: translate(-50%, 1rem); z-index: 1200; background: var(--secondary-color); color: var(--light-color); border-radius: .5rem; padding: .85rem 1rem; box-shadow: 0 1rem 2rem var(--shadow-color); opacity: 0; pointer-events: none; transition: opacity .25s ease, transform .25s ease; }
.floating-toast.show { opacity: 1; transform: translate(-50%, 0); }
`);

write("assets/css/responsive.css", `@media (max-width: 991.98px) {
  .site-navbar > .container { flex-wrap: wrap; }
  .navbar-brand { min-width: 0; }
  .nav-actions { margin-left: auto; }
  .navbar-collapse { flex-basis: 100%; order: 3; }
  .navbar-collapse {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: .85rem;
    box-shadow: 0 .75rem 2rem var(--shadow-color);
    margin-top: .75rem;
    padding: .75rem;
  }
  .navbar-collapse.show {
    max-height: calc(100vh - 4.5rem);
    overflow-y: auto;
    overscroll-behavior: contain;
  }
  .navbar-nav { gap: .25rem; }
  .nav-link { padding: .7rem .9rem; }
  .nav-link::after { display: none; }
  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active {
    background: transparent;
    color: var(--primary-color);
    border-left: .2rem solid var(--secondary-color);
    padding-left: .7rem;
  }
  .mega-menu { position: static; box-shadow: none; padding: 1rem; border-radius: .75rem; background: var(--surface-bg); }
  .section { padding: 4rem 0; }
  .rounded-media { min-height: 300px; }
}

@media (min-width: 992px) {
  .navbar-collapse { order: 2; }
  .nav-actions { order: 3; }
  .navbar-nav { align-items: center; }
}

@media (max-width: 767.98px) {
  .home-hero, .home-hero .carousel-item, .home-hero img { min-height: 680px; height: 680px; }
  .carousel-caption { left: 5%; right: 5%; }
  .carousel-caption h1, .page-hero h1, .not-found h1 { font-size: 2.55rem; }
  .carousel-caption p, .page-hero p { font-size: 1rem; }
  .hero-buttons .btn { width: 100%; }
  .page-hero { min-height: 430px; padding: 7rem 0 3rem; }
  .gallery-item img, .image-card img, .faculty-card img { height: 210px; }
}

@media (max-width: 575.98px) {
  .navbar-brand { padding: 0; border-radius: 0; }
  .brand-logo { width: 8.2rem; height: 3.8rem; }
  .section { padding: 3.25rem 0; }
  .section-title { margin-bottom: 2rem; }
  .content-panel, .form-panel, .download-card, .career-card, .testimonial-card, .article-content { padding: 1.15rem; }
  .site-footer { padding-top: 2.5rem; }
  .site-footer .row { --bs-gutter-y: 1rem; }
  .site-footer h2 { margin-bottom: .45rem; }
  .site-footer a { margin: .18rem 0; }
  .site-footer .newsletter-form { margin-top: .5rem; }
  .footer-copy { margin: .75rem 0; }
  .footer-contact { display: grid; gap: .45rem; }
  .footer-bottom { display: flex; align-items: center; justify-content: center; text-align: center; margin-top: 1.25rem; padding-top: .85rem; }
  .footer-legal { justify-content: center; width: 100%; }
}
`);

write("assets/css/animation.css", `.card, .btn, .theme-toggle, .back-to-top, .download-card, .career-card, .testimonial-card {
  transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease, color .25s ease, border-color .25s ease;
}
.btn:hover, .theme-toggle:hover, .back-to-top:hover { transform: translateY(-.12rem); }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
`);

write("assets/js/main.js", `"use strict";

$(function () {
  var savedTheme = localStorage.getItem("school-theme") || "light";
  $("html").attr("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }

  $(".theme-toggle").on("click", function () {
    var nextTheme = $("html").attr("data-theme") === "dark" ? "light" : "dark";
    $("html").attr("data-theme", nextTheme);
    localStorage.setItem("school-theme", nextTheme);
    updateThemeIcon(nextTheme);
  });

  $(window).on("scroll", function () {
    $(".back-to-top").toggleClass("show", $(this).scrollTop() > 420);
  });

  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 450);
  });

  $(".needs-validation").on("submit", function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
      event.stopPropagation();
      $(this).addClass("was-validated");
      return;
    }

    this.reset();
    $(this).removeClass("was-validated");
    showToast("Thank you. Your request has been received.");
  });

  var current = window.location.pathname.split("/").pop() || "index.html";
  $(".nav-link").each(function () {
    $(this).toggleClass("active", $(this).attr("href") === current);
  });
});

function updateThemeIcon(theme) {
  $(".theme-toggle i").attr("class", theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars");
}

function showToast(message) {
  var toast = $("<div>").addClass("floating-toast").text(message);
  $("body").append(toast);
  setTimeout(function () { toast.addClass("show"); }, 20);
  setTimeout(function () {
    toast.removeClass("show");
    setTimeout(function () { toast.remove(); }, 300);
  }, 2600);
}
`);

write("assets/js/custom.js", "");

console.log("Fresh BrightPath Academy website generated with " + Object.keys(output).length + " pages.");

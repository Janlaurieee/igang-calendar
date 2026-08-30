// app.js

// --- STATIC DATA ---
const STAFF_BIRTHDAYS = [
  { name: 'Jeorgina', month: 0, day: 1 },
  { name: 'Laurence', month: 0, day: 10 },
  { name: 'John Rey Postremo', month: 0, day: 11 },
  { name: 'Kim', month: 0, day: 12 },
  { name: 'Riza', month: 0, day: 26 },
  { name: 'Kyle Salva', month: 1, day: 17 },
  { name: 'Dianne', month: 1, day: 23 },
  { name: 'Eden', month: 2, day: 12 },
  { name: 'Francine', month: 2, day: 19 },
  { name: 'Marrione', month: 2, day: 20 },
  { name: 'Sir Budz', month: 2, day: 26 },
  { name: 'Louisa', month: 3, day: 18 },
  { name: 'Karizza', month: 3, day: 19 },
  { name: 'Romil', month: 4, day: 5 },
  { name: 'Mary Gloria', month: 4, day: 10 },
  { name: 'Melrose', month: 4, day: 25 },
  { name: 'Ada Louise', month: 4, day: 25 },
  { name: 'Nicole', month: 5, day: 20 },
  { name: 'Venice', month: 5, day: 25 },
  { name: 'Joshine', month: 5, day: 30 },
  { name: 'Jaira', month: 5, day: 8 },
  { name: 'Devine', month: 6, day: 11 },
  { name: 'Michaela', month: 6, day: 25 },
  { name: 'Jenny', month: 7, day: 8 },
  { name: 'Myla', month: 7, day: 9 },
  { name: 'Ashley', month: 7, day: 30 },
  { name: 'R. Lazarito', month: 8, day: 4 },
  { name: 'Clint Jhon Recto', month: 8, day: 18 },
  { name: 'Ariana', month: 8, day: 20 },
  { name: 'Rhiza', month: 8, day: 28 },
  { name: 'Cristel', month: 9, day: 6 },
  { name: 'Chedylle', month: 9, day: 17 },
  { name: 'Loren', month: 10, day: 20 },
  { name: 'Illa', month: 11, day: 19 },
  { name: 'Maby', month: 11, day: 21 },
  { name: 'Marga', month: 11, day: 24 }
];

// Month is 0-indexed
const HOLIDAYS = [
  { month: 0, day: 1, title: "New Year's Day", type: 'regular', desc: 'The first day of the year.' },
  { month: 1, day: 17, title: "Chinese New Year", type: 'special', desc: 'Subject to official declaration.' }, // Example 2026
  { month: 1, day: 25, title: "EDSA People Power Anniversary", type: 'special', desc: 'When applicable.' },
  { month: 3, day: 9, title: "Araw ng Kagitingan", type: 'regular', desc: 'Day of Valor.' },
  { month: 3, day: 2, title: "Maundy Thursday", type: 'regular', desc: 'Subject to lunar calendar (Estimated 2026).' }, 
  { month: 3, day: 3, title: "Good Friday", type: 'regular', desc: 'Subject to lunar calendar (Estimated 2026).' },
  { month: 3, day: 4, title: "Black Saturday", type: 'special', desc: 'Subject to official declaration.' },
  { month: 4, day: 1, title: "Labor Day", type: 'regular', desc: 'Honoring workers.' },
  { month: 5, day: 12, title: "Independence Day", type: 'regular', desc: 'Philippine Independence Day.' },
  { month: 7, day: 21, title: "Ninoy Aquino Day", type: 'special', desc: 'Honoring Benigno Aquino Jr.' },
  { month: 7, day: 31, title: "National Heroes Day", type: 'regular', desc: 'Last Monday of August.' }, // Hardcoded 2026 estimate
  { month: 10, day: 1, title: "All Saints' Day", type: 'special', desc: 'Day for honoring saints.' },
  { month: 10, day: 2, title: "All Souls' Day", type: 'special', desc: 'When officially declared.' },
  { month: 10, day: 30, title: "Bonifacio Day", type: 'regular', desc: 'Honoring Andres Bonifacio.' },
  { month: 11, day: 8, title: "Feast of the Immaculate Conception", type: 'special', desc: 'Religious holiday.' },
  { month: 11, day: 24, title: "Christmas Eve", type: 'special', desc: 'When officially declared.' },
  { month: 11, day: 25, title: "Christmas Day", type: 'regular', desc: 'Christmas Day.' },
  { month: 11, day: 30, title: "Rizal Day", type: 'regular', desc: 'Honoring Jose Rizal.' },
  { month: 11, day: 31, title: "Last Day of the Year", type: 'special', desc: 'New Year\'s Eve.' }
];

const OBSERVANCES = [
  { month: 0, day: 24, title: "International Day of Education", type: 'intl', desc: 'Recognizing the role of education for peace and development.' },
  { month: 1, day: 13, title: "World Radio Day", type: 'journalism', desc: 'Celebrating radio as a medium to improve international cooperation.' },
  { month: 2, day: 8, title: "International Women's Day", type: 'intl', desc: 'A global day celebrating the social, economic, cultural, and political achievements of women.' },
  { month: 2, day: 21, title: "World Poetry Day", type: 'intl', desc: 'Celebrating one of humanity\'s most treasured forms of cultural and linguistic expression.' },
  { month: 3, day: 22, title: "Earth Day", type: 'intl', desc: 'Annual event to demonstrate support for environmental protection.' },
  { month: 3, day: 23, title: "World Book and Copyright Day", type: 'intl', desc: 'Promoting reading, publishing, and copyright.' },
  { month: 4, day: 3, title: "World Press Freedom Day", type: 'journalism', desc: 'An international observance that highlights the importance of press freedom and reminds governments of their responsibility to respect freedom of expression and independent journalism.' },
  { month: 4, day: 17, title: "World Telecommunication Day", type: 'intl', desc: 'Highlighting the role of information and communication technologies.' },
  { month: 5, day: 5, title: "World Environment Day", type: 'intl', desc: 'Encouraging awareness and action for the protection of the environment.' },
  { month: 5, day: 30, title: "Social Media Day", type: 'intl', desc: 'Recognizing social media\'s impact on global communication.' },
  { month: 7, day: 12, title: "International Youth Day", type: 'intl', desc: 'Bringing youth issues to the attention of the international community.' },
  { month: 8, day: 8, title: "International Literacy Day", type: 'intl', desc: 'Highlighting the importance of literacy as a matter of dignity and human rights.' },
  { month: 8, day: 21, title: "International Day of Peace", type: 'intl', desc: 'Dedicated to world peace, specifically the absence of war and violence.' },
  { month: 8, day: 28, title: "Intl. Day for Universal Access to Information", type: 'journalism', desc: 'Promoting the right to seek, receive, and impart information.' },
  { month: 9, day: 5, title: "World Teachers' Day", type: 'intl', desc: 'Celebrating the work of teachers around the world.' },
  { month: 9, day: 24, title: "United Nations Day", type: 'intl', desc: 'Marking the anniversary of the UN Charter.' },
  { month: 10, day: 2, title: "Intl. Day to End Impunity for Crimes against Journalists", type: 'journalism', desc: 'Drawing attention to the level of impunity for crimes against journalists.' },
  { month: 10, day: 20, title: "World Children's Day", type: 'intl', desc: 'Promoting international togetherness, awareness among children worldwide.' },
  { month: 11, day: 10, title: "Human Rights Day", type: 'intl', desc: 'Commemorating the adoption of the Universal Declaration of Human Rights.' }
];

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// --- STATE ---
const STORAGE_KEY = 'igang_notes';
let notesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
let currentDate = new Date();
let displayedMonth = currentDate.getMonth();
let displayedYear = currentDate.getFullYear();
let activeFilter = 'all';
let showBirthdays = true;

// --- DOM ELEMENTS ---
const elements = {
  calendarGrid: document.getElementById('calendarGrid'),
  calendarTitle: document.getElementById('calendarTitle'),
  monthSelect: document.getElementById('monthSelect'),
  yearSelect: document.getElementById('yearSelect'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  todayBtns: [document.getElementById('todayBtn'), document.getElementById('todayBtnMobile'), document.getElementById('todayBtn2')],
  chips: document.querySelectorAll('.chip'),
  toggleBirthdays: document.getElementById('toggleBirthdays'),
  todayFull: document.getElementById('todayFull'),
  todayWeekday: document.getElementById('todayWeekday'),
  todayBadge: document.getElementById('todayBadge'),
  todayEvents: document.getElementById('todayEvents'),
  todayNotes: document.getElementById('todayNotes'),
  todayNotesCount: document.getElementById('todayNotesCount'),
  todayBirthdayHighlight: document.getElementById('todayBirthdayHighlight'),
  upcomingList: document.getElementById('upcomingList'),
  drawer: document.getElementById('dayDrawer'),
  drawerDateHead: document.getElementById('drawerDateHead'),
  drawerEvents: document.getElementById('drawerEvents'),
  drawerNotes: document.getElementById('drawerNotes'),
  drawerAddNote: document.getElementById('drawerAddNote'),
  closeDrawerBtn: document.getElementById('closeDrawer'),
  drawerBackdrop: document.getElementById('drawerBackdrop'),
  eventModal: document.getElementById('eventModal'),
  eventModalTitle: document.getElementById('eventModalTitle'),
  eventModalMeta: document.getElementById('eventModalMeta'),
  eventModalDesc: document.getElementById('eventModalDesc'),
  eventModalBadge: document.getElementById('eventModalBadge'),
  noteModal: document.getElementById('noteModal'),
  noteForm: document.getElementById('noteForm'),
  cancelNote: document.getElementById('cancelNote'),
  noteId: document.getElementById('noteId'),
  noteDateStr: document.getElementById('noteDateStr'),
  noteTitle: document.getElementById('noteTitle'),
  noteDesc: document.getElementById('noteDesc'),
  noteTime: document.getElementById('noteTime'),
  noteCategory: document.getElementById('noteCategory'),
  clearAllNotesBtn: document.getElementById('clearAllNotes'),
  toast: document.getElementById('toast'),
  navLinks: document.querySelectorAll('.nav-link'),
  calendarMain: document.querySelector('.calendar-card'),
  filterBar: document.querySelector('.filter-bar'),
  toolbar: document.querySelector('.calendar-toolbar'),
  legend: document.querySelector('.legend'),
  eventsListView: document.getElementById('eventsListView'),
  notesListView: document.getElementById('notesListView'),
  mobileMenu: document.getElementById('mobileMenu'),
  mobileNav: document.getElementById('mobileNav'),
  searchBtn: document.getElementById('searchBtn'),
  searchBtnMobile: document.getElementById('searchBtnMobile'),
  searchOverlay: document.getElementById('searchOverlay'),
  closeSearch: document.getElementById('closeSearch'),
  searchInput: document.getElementById('searchInput'),
  searchResults: document.getElementById('searchResults'),
  addNoteToday: document.getElementById('addNoteToday')
};

// --- INITIALIZATION ---
function init() {
  populateDropdowns();
  attachEventListeners();
  updateCalendar();
  updateSidebar();
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData));
  updateCalendar();
  updateSidebar();
  if (elements.drawer.classList.contains('open')) {
    renderDrawerContent(elements.drawerDateHead.dataset.date);
  }
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function showToast(msg) {
  elements.toast.textContent = msg;
  elements.toast.classList.add('show');
  setTimeout(() => elements.toast.classList.remove('show'), 3000);
}

// --- DATA HELPERS ---
function getDateString(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function getEventsForDate(month, day) {
  const h = HOLIDAYS.filter(x => x.month === month && x.day === day).map(x => ({ ...x, group: 'holiday' }));
  const o = OBSERVANCES.filter(x => x.month === month && x.day === day).map(x => ({ ...x, group: 'observance' }));
  const b = showBirthdays ? STAFF_BIRTHDAYS.filter(x => x.month === month && x.day === day).map(x => ({ ...x, group: 'birthday' })) : [];
  return [...h, ...o, ...b];
}

function getNotesForDate(dateStr) {
  return notesData[dateStr] || [];
}

// --- CALENDAR RENDERING ---
function populateDropdowns() {
  MONTH_NAMES.forEach((m, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = m;
    elements.monthSelect.appendChild(opt);
  });
  
  for (let y = currentDate.getFullYear() - 5; y <= currentDate.getFullYear() + 5; y++) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    elements.yearSelect.appendChild(opt);
  }
}

function updateCalendar() {
  elements.calendarTitle.textContent = `${MONTH_NAMES[displayedMonth]} ${displayedYear}`;
  elements.monthSelect.value = displayedMonth;
  elements.yearSelect.value = displayedYear;
  
  elements.calendarGrid.innerHTML = '';
  
  const firstDay = new Date(displayedYear, displayedMonth, 1).getDay();
  const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(displayedYear, displayedMonth, 0).getDate();
  
  const todayStr = getDateString(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  let totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
  if(totalCells < 42) totalCells = 42; // standard 6 rows

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'day';
    
    let cellYear = displayedYear;
    let cellMonth = displayedMonth;
    let cellDay;
    let isCurrentMonth = true;

    if (i < firstDay) {
      cellDay = daysInPrevMonth - firstDay + i + 1;
      cellMonth = displayedMonth - 1;
      if (cellMonth < 0) { cellMonth = 11; cellYear--; }
      cell.classList.add('other');
      isCurrentMonth = false;
    } else if (i >= firstDay && i < firstDay + daysInMonth) {
      cellDay = i - firstDay + 1;
    } else {
      cellDay = i - firstDay - daysInMonth + 1;
      cellMonth = displayedMonth + 1;
      if (cellMonth > 11) { cellMonth = 0; cellYear++; }
      cell.classList.add('other');
      isCurrentMonth = false;
    }

    const dateStr = getDateString(cellYear, cellMonth, cellDay);
    if (dateStr === todayStr) {
      cell.classList.add('today');
    }

    const dayHead = document.createElement('div');
    dayHead.className = 'day-head';
    dayHead.innerHTML = `<div class="num">${cellDay}</div>`;
    cell.appendChild(dayHead);

    // Fetch Events & Notes
    let events = getEventsForDate(cellMonth, cellDay);
    let notes = getNotesForDate(dateStr);

    // Filter
    if (activeFilter === 'holiday') {
      events = events.filter(e => e.group === 'holiday');
      notes = [];
    } else if (activeFilter === 'international') {
      events = events.filter(e => e.group === 'observance' && e.type === 'intl');
      notes = [];
    } else if (activeFilter === 'journalism') {
      events = events.filter(e => e.group === 'observance' && e.type === 'journalism');
      notes = [];
    } else if (activeFilter === 'birthday') {
      events = events.filter(e => e.group === 'birthday');
      notes = [];
    } else if (activeFilter === 'personal') {
      events = [];
    }

    const eventsContainer = document.createElement('div');
    eventsContainer.className = 'events';
    
    const combined = [];
    events.forEach(e => {
      let icon = '🟠';
      let pillClass = 'regular';
      if(e.type === 'special') pillClass = 'special';
      if(e.type === 'working') pillClass = 'working';
      if(e.type === 'intl') { pillClass = 'intl'; icon = '🔵'; }
      if(e.type === 'journalism') { pillClass = 'journalism'; icon = '📝'; }
      if(e.group === 'birthday') { pillClass = 'birthday'; icon = '🎂'; }
      
      combined.push({ text: `${icon} ${e.name ? e.name + "'s Birthday" : e.title}`, class: pillClass, obj: e });
    });
    
    notes.forEach(n => {
      combined.push({ text: `📝 ${n.title}`, class: 'personal', obj: n });
    });

    const MAX_VISIBLE = isCurrentMonth ? 3 : 2;
    
    combined.slice(0, MAX_VISIBLE).forEach(item => {
      const pill = document.createElement('div');
      pill.className = `pill ${item.class}`;
      pill.textContent = item.text;
      
      // Stop propagation so clicking pill can open specific details
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        if(item.obj.group === 'holiday' || item.obj.group === 'observance') {
          openEventModal(item.obj);
        } else if(item.obj.group === 'birthday') {
          openEventModal({ ...item.obj, title: `${item.obj.name}'s Birthday`, desc: "Happy Birthday from The Igang Publication!", type: 'birthday' });
        } else {
          // It's a personal note
          openEventModal({
            title: item.obj.title,
            type: 'personal',
            desc: (item.obj.time ? `Time: ${item.obj.time}\n\n` : '') + (item.obj.desc || "No additional details."),
            month: cellMonth,
            day: cellDay,
            customBadge: item.obj.category
          });
        }
      });
      eventsContainer.appendChild(pill);
    });

    if (combined.length > MAX_VISIBLE) {
      const more = document.createElement('div');
      more.className = 'pill more';
      more.textContent = `+${combined.length - MAX_VISIBLE} more`;
      eventsContainer.appendChild(more);
    }

    cell.appendChild(eventsContainer);
    
    cell.addEventListener('click', () => {
      openDayDrawer(dateStr, cellYear, cellMonth, cellDay, events, notes);
    });

    elements.calendarGrid.appendChild(cell);
  }
}

// --- SIDEBAR ---
function updateSidebar() {
  const td = currentDate;
  const dateStr = getDateString(td.getFullYear(), td.getMonth(), td.getDate());
  
  elements.todayFull.textContent = `${MONTH_NAMES[td.getMonth()]} ${td.getDate()}, ${td.getFullYear()}`;
  elements.todayWeekday.textContent = WEEKDAYS[td.getDay()];
  elements.todayBadge.textContent = td.getDate();
  
  let events = getEventsForDate(td.getMonth(), td.getDate());
  let notes = getNotesForDate(dateStr);
  
  // Highlight birthdays prominently
  const bdays = events.filter(e => e.group === 'birthday');
  if(bdays.length > 0) {
    elements.todayBirthdayHighlight.classList.remove('hidden');
    elements.todayBirthdayHighlight.innerHTML = `🎂 HAPPY BIRTHDAY!<br>Today is ${bdays.map(b => b.name).join(' & ')}'s Birthday!`;
  } else {
    elements.todayBirthdayHighlight.classList.add('hidden');
  }
  
  // Today events
  elements.todayEvents.innerHTML = '';
  if(events.length === 0) {
    elements.todayEvents.innerHTML = '<div class="empty">No events scheduled.</div>';
  } else {
    events.forEach(e => {
      const div = document.createElement('div');
      div.className = 'event-row';
      let badge = 'Event';
      if(e.group === 'holiday') badge = 'Holiday';
      if(e.type === 'journalism') badge = 'Journalism';
      if(e.group === 'birthday') badge = 'Birthday';
      
      div.innerHTML = `
        <div class="note-main">
          <div class="note-title">${e.name ? e.name + "'s Birthday" : e.title}</div>
          <div class="note-meta"><span class="badge">${badge}</span></div>
        </div>
      `;
      elements.todayEvents.appendChild(div);
    });
  }
  
  // Today notes
  elements.todayNotes.innerHTML = '';
  elements.todayNotesCount.textContent = notes.length;
  if(notes.length === 0) {
    elements.todayNotes.innerHTML = '<div class="empty">No notes scheduled for today.</div>';
  } else {
    notes.forEach(n => {
      elements.todayNotes.appendChild(createNoteElement(n, dateStr));
    });
  }
  
  // Upcoming Events (Next 30 days)
  elements.upcomingList.innerHTML = '';
  let count = 0;
  for(let i = 1; i <= 30; i++) {
    let d = new Date(td.getFullYear(), td.getMonth(), td.getDate() + i);
    let eList = getEventsForDate(d.getMonth(), d.getDate());
    
    eList.forEach(e => {
      if(count < 6) { // Limit to 6
        const div = document.createElement('div');
        div.className = 'upcoming-item';
        div.innerHTML = `
          <div class="upcoming-date">
            <b>${String(d.getDate()).padStart(2,'0')}</b>
            <span>${MONTH_NAMES[d.getMonth()].substring(0,3).toUpperCase()}</span>
          </div>
          <div>
            <div class="upcoming-title">${e.name ? e.name + "'s Birthday" : e.title}</div>
            <div class="upcoming-sub">${e.type === 'journalism' ? 'Journalism & Media' : e.group === 'holiday' ? 'Philippine Holiday' : e.group === 'birthday' ? 'Staffer Birthday' : 'Observance'}</div>
          </div>
        `;
        elements.upcomingList.appendChild(div);
        count++;
      }
    });
  }
  if(count === 0) elements.upcomingList.innerHTML = '<div class="empty">No upcoming events.</div>';
}

// --- DRAWERS AND MODALS ---
function openDayDrawer(dateStr, year, month, day, events, notes) {
  elements.drawer.dataset.date = dateStr;
  const d = new Date(year, month, day);
  elements.drawerDateHead.innerHTML = `
    <p>${WEEKDAYS[d.getDay()]}</p>
    <h3>${MONTH_NAMES[month]} ${day}, ${year}</h3>
  `;
  
  renderDrawerContent(dateStr);
  elements.drawer.classList.add('open');
}

function renderDrawerContent(dateStr) {
  const parts = dateStr.split('-');
  const month = parseInt(parts[1]) - 1;
  const day = parseInt(parts[2]);
  
  const events = getEventsForDate(month, day);
  const notes = getNotesForDate(dateStr);
  
  elements.drawerEvents.innerHTML = '';
  if(events.length === 0) {
    elements.drawerEvents.innerHTML = '<div class="empty">Your calendar is clear for this day.</div>';
  } else {
    events.forEach(e => {
      const div = document.createElement('div');
      div.className = 'event-row';
      div.style.cursor = 'pointer';
      
      let badge = 'Event';
      if(e.group === 'holiday') badge = 'Holiday';
      if(e.type === 'journalism') badge = 'Journalism';
      if(e.group === 'birthday') badge = 'Birthday';
      
      div.innerHTML = `
        <div class="note-main">
          <div class="note-title">${e.name ? e.name + "'s Birthday" : e.title}</div>
          <div class="note-meta"><span class="badge">${badge}</span></div>
        </div>
      `;
      div.onclick = () => {
        if(e.group === 'holiday' || e.group === 'observance') openEventModal(e);
        if(e.group === 'birthday') openEventModal({ ...e, title: `${e.name}'s Birthday`, desc: "Happy Birthday from The Igang Publication!", type: 'birthday' });
      }
      elements.drawerEvents.appendChild(div);
    });
  }
  
  elements.drawerNotes.innerHTML = '';
  if(notes.length === 0) {
    elements.drawerNotes.innerHTML = '<div class="empty">No notes yet.<br>Add a note, deadline, meeting, or coverage schedule.</div>';
  } else {
    notes.forEach(n => {
      elements.drawerNotes.appendChild(createNoteElement(n, dateStr));
    });
  }
}

function createNoteElement(n, dateStr) {
  const div = document.createElement('div');
  div.className = `note-item ${n.completed ? 'completed' : ''}`;
  div.innerHTML = `
    <input type="checkbox" ${n.completed ? 'checked' : ''} onchange="toggleNote('${dateStr}', '${n.id}', this.checked)">
    <div class="note-main">
      <div class="note-title">${n.title}</div>
      ${n.desc ? `<div class="note-desc">${n.desc}</div>` : ''}
      <div class="note-meta">
        <span class="badge">${n.category}</span>
        ${n.time ? `<span>🕒 ${n.time}</span>` : ''}
      </div>
    </div>
    <div class="note-actions">
      <button class="icon-mini" onclick="editNote('${dateStr}', '${n.id}')">✏️</button>
      <button class="icon-mini" onclick="deleteNote('${dateStr}', '${n.id}')">🗑️</button>
    </div>
  `;
  return div;
}

window.toggleNote = function(dateStr, id, completed) {
  const note = notesData[dateStr].find(x => x.id === id);
  if(note) {
    note.completed = completed;
    saveNotes();
  }
}

window.deleteNote = function(dateStr, id) {
  notesData[dateStr] = notesData[dateStr].filter(x => x.id !== id);
  if(notesData[dateStr].length === 0) delete notesData[dateStr];
  saveNotes();
  showToast('Note deleted');
}

window.editNote = function(dateStr, id) {
  const note = notesData[dateStr].find(x => x.id === id);
  if(note) {
    openNoteModal(dateStr, note);
  }
}

function openEventModal(e) {
  elements.eventModalTitle.textContent = e.title;
  let typeLabel = "Event";
  if(e.type === 'regular') typeLabel = "Regular Holiday";
  if(e.type === 'special') typeLabel = "Special Non-Working Day";
  if(e.type === 'working') typeLabel = "Special Working Day";
  if(e.type === 'intl') typeLabel = "International Observance";
  if(e.type === 'journalism') typeLabel = "Journalism & Media";
  if(e.type === 'birthday') typeLabel = "Staffer Birthday";
  if(e.customBadge) typeLabel = e.customBadge;
  
  elements.eventModalBadge.textContent = typeLabel;
  elements.eventModalMeta.textContent = `${MONTH_NAMES[e.month]} ${e.day}`;
  elements.eventModalDesc.textContent = e.desc;
  
  elements.eventModal.classList.add('open');
}

function openNoteModal(dateStr, existing = null) {
  elements.noteForm.reset();
  elements.noteDateStr.value = dateStr;
  
  if (existing) {
    document.getElementById('noteModalTitle').textContent = 'Edit Note';
    elements.noteId.value = existing.id;
    elements.noteTitle.value = existing.title;
    elements.noteDesc.value = existing.desc;
    elements.noteTime.value = existing.time;
    elements.noteCategory.value = existing.category;
  } else {
    document.getElementById('noteModalTitle').textContent = 'Add Note';
    elements.noteId.value = '';
  }
  
  elements.noteModal.classList.add('open');
}

// --- VIEWS (Tabs) ---
function switchView(view) {
  elements.navLinks.forEach(l => l.classList.remove('active'));
  document.querySelectorAll(`[data-view="${view}"]`).forEach(l => l.classList.add('active'));
  
  elements.calendarMain.classList.add('hidden');
  elements.eventsListView.classList.add('hidden');
  elements.notesListView.classList.add('hidden');
  elements.filterBar.classList.add('hidden');
  elements.toolbar.classList.add('hidden');
  elements.legend.classList.add('hidden');
  
  if (view === 'calendar') {
    elements.calendarMain.classList.remove('hidden');
    elements.filterBar.classList.remove('hidden');
    elements.toolbar.classList.remove('hidden');
    elements.legend.classList.remove('hidden');
  } else if (view === 'events') {
    elements.eventsListView.classList.remove('hidden');
    renderEventsList();
  } else if (view === 'notes') {
    elements.notesListView.classList.remove('hidden');
    renderNotesList();
  }
  
  elements.mobileNav.classList.remove('open');
}

function renderEventsList() {
  elements.eventsListView.innerHTML = '<h3>Events & Observances</h3><div class="search-results"></div>';
  const container = elements.eventsListView.querySelector('.search-results');
  
  const allEvents = [...HOLIDAYS, ...OBSERVANCES, ...STAFF_BIRTHDAYS].map(e => ({
    ...e,
    title: e.name ? `${e.name}'s Birthday` : e.title,
    group: e.name ? 'birthday' : e.group
  })).sort((a,b) => {
    if(a.month !== b.month) return a.month - b.month;
    return a.day - b.day;
  });
  
  allEvents.forEach(e => {
    const item = document.createElement('div');
    item.className = 'search-item';
    item.innerHTML = `
      <div>
        <b>${e.title}</b>
        <span>${MONTH_NAMES[e.month]} ${e.day}</span>
      </div>
      <span class="badge">${e.type === 'journalism' ? 'Journalism' : e.group === 'holiday' ? 'Holiday' : e.group === 'birthday' ? 'Birthday' : 'Observance'}</span>
    `;
    item.onclick = () => openEventModal({ ...e, desc: e.desc || "Happy Birthday from The Igang Publication!" });
    container.appendChild(item);
  });
}

function renderNotesList() {
  elements.notesListView.innerHTML = '<h3>My Notes</h3><div class="search-results"></div>';
  const container = elements.notesListView.querySelector('.search-results');
  
  const sortedDates = Object.keys(notesData).sort();
  if(sortedDates.length === 0) {
    container.innerHTML = '<div class="empty">No notes saved.</div>';
    return;
  }
  
  sortedDates.forEach(d => {
    notesData[d].forEach(n => {
      const parts = d.split('-');
      const mName = MONTH_NAMES[parseInt(parts[1])-1];
      
      const item = document.createElement('div');
      item.className = 'search-item';
      item.innerHTML = `
        <div>
          <b>${n.title}</b>
          <span>${mName} ${parts[2]}, ${parts[0]}</span>
        </div>
        <span class="badge">${n.category}</span>
      `;
      item.onclick = () => openDayDrawer(d, parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]), [], []);
      container.appendChild(item);
    });
  });
}

// --- SEARCH ---
function handleSearch(q) {
  q = q.toLowerCase();
  elements.searchResults.innerHTML = '';
  if(!q) return;
  
  // Search Events
  const allEvents = [...HOLIDAYS, ...OBSERVANCES, ...STAFF_BIRTHDAYS].map(e => ({
    ...e,
    title: e.name ? `${e.name}'s Birthday` : e.title,
    group: e.name ? 'birthday' : e.group
  }));
  
  allEvents.filter(e => e.title.toLowerCase().includes(q) || (e.desc && e.desc.toLowerCase().includes(q))).forEach(e => {
    const item = document.createElement('div');
    item.className = 'search-item';
    item.innerHTML = `
      <div><b>${e.title}</b> <span>${MONTH_NAMES[e.month]} ${e.day}</span></div>
      <span class="badge">${e.group === 'birthday' ? 'Birthday' : 'Event'}</span>
    `;
    item.onclick = () => { closeSearch(); openEventModal({ ...e, desc: e.desc || "Happy Birthday!" }); }
    elements.searchResults.appendChild(item);
  });
  
  // Search Notes
  Object.keys(notesData).forEach(d => {
    notesData[d].forEach(n => {
      if(n.title.toLowerCase().includes(q) || (n.desc && n.desc.toLowerCase().includes(q))) {
        const item = document.createElement('div');
        item.className = 'search-item';
        const parts = d.split('-');
        item.innerHTML = `
          <div><b>${n.title}</b> <span>${MONTH_NAMES[parseInt(parts[1])-1]} ${parts[2]}</span></div>
          <span class="badge">${n.category}</span>
        `;
        item.onclick = () => { closeSearch(); openDayDrawer(d, parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]), [], []); }
        elements.searchResults.appendChild(item);
      }
    })
  });
  
  if(elements.searchResults.children.length === 0) {
    elements.searchResults.innerHTML = '<div class="empty">No results found.</div>';
  }
}

function openSearch() {
  elements.searchOverlay.classList.add('open');
  elements.searchInput.value = '';
  elements.searchResults.innerHTML = '';
  elements.searchInput.focus();
}

function closeSearch() {
  elements.searchOverlay.classList.remove('open');
}

// --- EVENTS ---
function attachEventListeners() {
  elements.prevBtn.onclick = () => {
    displayedMonth--;
    if (displayedMonth < 0) { displayedMonth = 11; displayedYear--; }
    updateCalendar();
  };
  
  elements.nextBtn.onclick = () => {
    displayedMonth++;
    if (displayedMonth > 11) { displayedMonth = 0; displayedYear++; }
    updateCalendar();
  };
  
  elements.todayBtns.forEach(btn => {
    if(btn) {
      btn.onclick = () => {
        displayedMonth = currentDate.getMonth();
        displayedYear = currentDate.getFullYear();
        updateCalendar();
      };
    }
  });
  
  elements.monthSelect.onchange = (e) => { displayedMonth = parseInt(e.target.value); updateCalendar(); };
  elements.yearSelect.onchange = (e) => { displayedYear = parseInt(e.target.value); updateCalendar(); };
  
  elements.chips.forEach(chip => {
    chip.onclick = () => {
      elements.chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      updateCalendar();
    };
  });
  
  elements.toggleBirthdays.onchange = (e) => {
    showBirthdays = e.target.checked;
    updateCalendar();
  };
  
  elements.closeDrawerBtn.onclick = () => elements.drawer.classList.remove('open');
  elements.drawerBackdrop.onclick = () => elements.drawer.classList.remove('open');
  
  document.querySelectorAll('.modal-close, .modal-backdrop, #cancelNote').forEach(el => {
    el.onclick = (e) => {
      if(e.target === el) {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
      }
    };
  });
  
  elements.drawerAddNote.onclick = () => {
    openNoteModal(elements.drawer.dataset.date);
  };
  
  elements.addNoteToday.onclick = () => {
    const td = currentDate;
    const dateStr = getDateString(td.getFullYear(), td.getMonth(), td.getDate());
    openNoteModal(dateStr);
  };
  
  elements.noteForm.onsubmit = (e) => {
    e.preventDefault();
    const dateStr = elements.noteDateStr.value;
    const id = elements.noteId.value || generateId();
    
    if(!notesData[dateStr]) notesData[dateStr] = [];
    
    const note = {
      id,
      title: elements.noteTitle.value,
      desc: elements.noteDesc.value,
      time: elements.noteTime.value,
      category: elements.noteCategory.value,
      completed: false
    };
    
    const existingIndex = notesData[dateStr].findIndex(x => x.id === id);
    if(existingIndex >= 0) {
      note.completed = notesData[dateStr][existingIndex].completed;
      notesData[dateStr][existingIndex] = note;
    } else {
      notesData[dateStr].push(note);
    }
    
    saveNotes();
    elements.noteModal.classList.remove('open');
    showToast('Note saved successfully');
  };
  
  elements.clearAllNotesBtn.onclick = () => {
    if(confirm("Are you sure you want to delete all notes? This cannot be undone.")) {
      notesData = {};
      saveNotes();
      showToast('All notes cleared');
    }
  };
  
  elements.navLinks.forEach(l => {
    l.onclick = () => switchView(l.dataset.view);
  });
  
  elements.mobileMenu.onclick = () => {
    elements.mobileNav.classList.toggle('open');
  };
  
  elements.searchBtn.onclick = openSearch;
  elements.searchBtnMobile.onclick = () => {
    elements.mobileNav.classList.remove('open');
    openSearch();
  };
  elements.closeSearch.onclick = closeSearch;
  elements.searchInput.oninput = (e) => handleSearch(e.target.value);
}

// BOOT
init();

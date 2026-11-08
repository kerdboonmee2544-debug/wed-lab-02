// เปรม นมสด - Interactive Dashboard & Quick POS

const menuCatalog = [
  { id: 'milk-m', name: 'นมสด (แก้วกลาง)', category: 'milk', price: 25, img: 'assets/milk-jar.jpg', sold: 38 },
  { id: 'milk-l', name: 'นมสดชมพู (แก้วเมสัน)', category: 'milk', price: 30, img: 'assets/milk-jar.jpg', sold: 24 },
  { id: 'soda', name: 'อิตาเลียนโซดา', category: 'soda', price: 25, img: 'assets/toast-dessert.jpg', sold: 21 },
  { id: 'toast-choco', name: 'ปังปิ้งช็อกโกแลต', category: 'toast', price: 12, img: 'assets/toast-choco.jpg', sold: 22 },
  { id: 'toast-cinnamon', name: 'ปังปิ้งอบเชย', category: 'toast', price: 12, img: 'assets/toast-cinnamon.jpg', sold: 16 },
  { id: 'toast-orange', name: 'ปังปิ้งแยมส้ม', category: 'toast', price: 12, img: 'assets/toast-marmalade.jpg', sold: 13 },
  { id: 'fries', name: 'เฟรนช์ฟรายส์', category: 'snack', price: 35, img: 'assets/fries.jpg', sold: 8 },
  { id: 'nuggets', name: 'นักเก็ต & เกี๊ยวทอด', category: 'snack', price: 40, img: 'assets/fried-snacks.jpg', sold: 6 },
  { id: 'milk-hot', name: 'นมสดร้อน (แก้วสแตนเลส)', category: 'milk', price: 20, img: 'assets/mug-kitkat.jpg', sold: 14 }
];

const periodData = {
  today: {
    subtitle: 'ข้อมูลประจำวันนี้ · รอบเวลาเปิดร้าน 17:00 – 22:00 น.',
    revenue: 2845,
    trend: '▲ +14.2%',
    subRevenue: 'เทียบกับเมื่อวาน (฿2,490)',
    orders: 64,
    ordersTrend: '▲ +8 บิล',
    barTitle: 'ยอดขายตามช่วงเวลา (17:00 – 22:00 น.)',
    barSub: 'เปรียบเทียบยอดขายแต่ละชั่วโมงตั้งแต่เปิดร้าน',
    bars: [
      { label: '17:00', value: 340 },
      { label: '18:00', value: 520 },
      { label: '19:00', value: 780, peak: true },
      { label: '20:00', value: 815, peak: true },
      { label: '21:00', value: 390 }
    ],
    categories: [
      { key: 'milk', name: 'นมสด (20/25/30฿)', color: '#2563eb', amount: 1420 },
      { key: 'toast', name: 'ขนมปังปิ้ง (12฿)', color: '#f59e0b', amount: 612 },
      { key: 'soda', name: 'อิตาเลียนโซดา (25฿)', color: '#8b5cf6', amount: 525 },
      { key: 'snack', name: 'ของทานเล่น / ของทอด', color: '#10b981', amount: 288 }
    ],
    multiplier: 1
  },
  week: {
    subtitle: 'ข้อมูลสะสม 7 วันล่าสุด · เปิดทุกเย็น 17:00 – 22:00 น.',
    revenue: 19420,
    trend: '▲ +9.6%',
    subRevenue: 'เทียบกับสัปดาห์ก่อน (฿17,710)',
    orders: 438,
    ordersTrend: '▲ +35 บิล',
    barTitle: 'ยอดขายรายวัน (7 วันล่าสุด)',
    barSub: 'ยอดขายช่วงวันศุกร์–เสาร์สูงที่สุดของสัปดาห์',
    bars: [
      { label: 'จ.', value: 2350 },
      { label: 'อ.', value: 2490 },
      { label: 'พ.', value: 2610 },
      { label: 'พฤ.', value: 2580 },
      { label: 'ศ.', value: 3420, peak: true },
      { label: 'ส.', value: 3580, peak: true },
      { label: 'อา.', value: 2390 }
    ],
    categories: [
      { key: 'milk', name: 'นมสด (20/25/30฿)', color: '#2563eb', amount: 9650 },
      { key: 'toast', name: 'ขนมปังปิ้ง (12฿)', color: '#f59e0b', amount: 4280 },
      { key: 'soda', name: 'อิตาเลียนโซดา (25฿)', color: '#8b5cf6', amount: 3450 },
      { key: 'snack', name: 'ของทานเล่น / ของทอด', color: '#10b981', amount: 2040 }
    ],
    multiplier: 7
  },
  month: {
    subtitle: 'ข้อมูลสะสมประจำเดือนนี้ · เปิดบริการทุกวัน',
    revenue: 78650,
    trend: '▲ +18.4%',
    subRevenue: 'เทียบกับเดือนก่อน (฿66,420)',
    orders: 1760,
    ordersTrend: '▲ +210 บิล',
    barTitle: 'ยอดขายรายสัปดาห์ (เดือนนี้)',
    barSub: 'สรุปยอดขายแบ่งตามสัปดาห์ที่ 1 – 4',
    bars: [
      { label: 'สัปดาห์ 1', value: 18200 },
      { label: 'สัปดาห์ 2', value: 19450 },
      { label: 'สัปดาห์ 3', value: 21100, peak: true },
      { label: 'สัปดาห์ 4', value: 19900 }
    ],
    categories: [
      { key: 'milk', name: 'นมสด (20/25/30฿)', color: '#2563eb', amount: 39100 },
      { key: 'toast', name: 'ขนมปังปิ้ง (12฿)', color: '#f59e0b', amount: 17400 },
      { key: 'soda', name: 'อิตาเลียนโซดา (25฿)', color: '#8b5cf6', amount: 13850 },
      { key: 'snack', name: 'ของทานเล่น / ของทอด', color: '#10b981', amount: 8300 }
    ],
    multiplier: 28
  }
};

let currentPeriod = 'today';
let currentFilter = 'all';
let cart = [];
let nextBillNumber = 1065;

const orders = [
  { id: '#1064', time: '20:42 น.', table: 'ทานที่ร้าน (โต๊ะ 4)', items: 'นมสดชมพู x2, ปังปิ้งช็อกโกแลต x2', total: 84, status: 'cooking' },
  { id: '#1063', time: '20:35 น.', table: 'สั่งกลับบ้าน', items: 'นมสด (แก้วกลาง) x1, ปังปิ้งอบเชย x2', total: 49, status: 'cooking' },
  { id: '#1062', time: '20:21 น.', table: 'ทานที่ร้าน (โต๊ะ 1)', items: 'อิตาเลียนโซดา x2, เฟรนช์ฟรายส์ x1', total: 85, status: 'served' },
  { id: '#1061', time: '20:10 น.', table: 'ทานที่ร้าน (โต๊ะ 6)', items: 'นมสดร้อน x2, ปังปิ้งแยมส้ม x1, นักเก็ต x1', total: 92, status: 'served' },
  { id: '#1060', time: '19:54 น.', table: 'สั่งกลับบ้าน', items: 'นมสดชมพู x1, ปังปิ้งช็อกโกแลต x1', total: 42, status: 'served' }
];

const formatTHB = (n) => '฿' + n.toLocaleString('th-TH');

function renderDashboard() {
  const data = periodData[currentPeriod];
  document.getElementById('currentDateText').textContent = data.subtitle;
  document.getElementById('kpiRevenue').textContent = formatTHB(data.revenue);
  document.getElementById('kpiRevenueTrend').textContent = data.trend;
  document.getElementById('kpiRevenueSub').textContent = data.subRevenue;
  document.getElementById('kpiOrders').textContent = `${data.orders.toLocaleString('th-TH')} บิล`;
  document.getElementById('kpiOrdersTrend').textContent = data.ordersTrend;
  const avg = (data.revenue / data.orders).toFixed(1);
  document.getElementById('kpiAvgBill').textContent = `เฉลี่ย ฿${avg} / บิล`;

  const milkCount = Math.round(62 * data.multiplier);
  const toastCount = Math.round(51 * data.multiplier);
  const sodaCount = Math.round(21 * data.multiplier);
  const snackCount = Math.round(14 * data.multiplier);
  const totalItems = milkCount + toastCount + sodaCount + snackCount;
  document.getElementById('kpiItems').textContent = `${totalItems.toLocaleString('th-TH')} รายการ`;
  document.getElementById('kpiItemsBreakdown').textContent =
    `นมสด ${milkCount} · ปังปิ้ง ${toastCount} · โซดา ${sodaCount} · ของทอด ${snackCount}`;

  // Bar Chart
  document.getElementById('barChartTitle').textContent = data.barTitle;
  document.getElementById('barChartSub').textContent = data.barSub;
  const maxBar = Math.max(...data.bars.map(b => b.value), 1);
  const barChart = document.getElementById('barChart');
  barChart.innerHTML = data.bars.map(b => {
    const heightPct = Math.max(Math.round((b.value / maxBar) * 150), 18);
    return `
      <div class="bar-col ${b.peak ? 'is-peak' : ''}">
        <span class="bar-col__val">${formatTHB(b.value)}</span>
        <div class="bar-col__bar" style="height:${heightPct}px"></div>
        <span class="bar-col__label">${b.label}</span>
      </div>
    `;
  }).join('');

  // Donut Chart
  const totalCat = data.categories.reduce((s, c) => s + c.amount, 0);
  document.getElementById('donutTotal').textContent = formatTHB(totalCat);
  let deg = 0;
  const stops = data.categories.map(c => {
    const slice = (c.amount / totalCat) * 360;
    const start = deg;
    deg += slice;
    return `${c.color} ${start.toFixed(1)}deg ${deg.toFixed(1)}deg`;
  });
  document.getElementById('donutChart').style.background = `conic-gradient(${stops.join(', ')})`;

  const legend = document.getElementById('donutLegend');
  legend.innerHTML = data.categories.map(c => {
    const pct = Math.round((c.amount / totalCat) * 100);
    return `
      <li>
        <span class="legend__name">
          <span class="legend__dot" style="background:${c.color}"></span>
          <span>${c.name}</span>
        </span>
        <span class="legend__val">${formatTHB(c.amount)} (${pct}%)</span>
      </li>
    `;
  }).join('');

  renderTopMenu(data.multiplier);
}

function renderTopMenu(multiplier) {
  const sorted = [...menuCatalog].sort((a, b) => b.sold - a.sold).slice(0, 5);
  const maxSold = sorted[0].sold * multiplier;
  const container = document.getElementById('topMenuList');
  container.innerHTML = sorted.map((item, idx) => {
    const count = item.sold * multiplier;
    const widthPct = Math.round((count / maxSold) * 100);
    return `
      <div class="top-item">
        <span class="top-rank">${idx + 1}</span>
        <img src="${item.img}" alt="${item.name}">
        <div class="top-item__body">
          <div class="top-item__row">
            <strong>${item.name}</strong>
            <span>${count} รายการ · ${formatTHB(count * item.price)}</span>
          </div>
          <div class="top-bar">
            <div class="top-bar__fill" style="width:${widthPct}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderPOSMenu() {
  const grid = document.getElementById('posMenuGrid');
  grid.innerHTML = menuCatalog.map(item => `
    <button type="button" class="pos-item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.name}">
      <div class="pos-item__info">
        <strong>${item.name}</strong>
        <span>฿${item.price}</span>
      </div>
    </button>
  `).join('');

  grid.querySelectorAll('.pos-item').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });
}

function addToCart(id) {
  const item = menuCatalog.find(m => m.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cartList');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  const submitBtn = document.getElementById('submitOrderBtn');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.qty * i.price, 0);

  countEl.textContent = `${totalQty} รายการ`;
  totalEl.textContent = formatTHB(totalPrice);
  submitBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    list.innerHTML = `<p class="empty-cart">ยังไม่ได้เลือกรายการ กดที่การ์ดเมนูด้านบนเพื่อเพิ่มออเดอร์</p>`;
    return;
  }

  list.innerHTML = cart.map(i => `
    <div class="cart-row">
      <span>${i.name} × ${i.qty}</span>
      <strong>${formatTHB(i.qty * i.price)}</strong>
    </div>
  `).join('');
}

function renderOrders() {
  const tbody = document.getElementById('ordersTableBody');
  const filtered = orders.filter(o => currentFilter === 'all' || o.status === currentFilter);

  tbody.innerHTML = filtered.map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${o.time}</td>
      <td>${o.table}</td>
      <td>${o.items}</td>
      <td><strong>${formatTHB(o.total)}</strong></td>
      <td>
        <span class="badge-status ${o.status === 'cooking' ? 'badge-status--cooking' : 'badge-status--served'}">
          ${o.status === 'cooking' ? 'กำลังทำ' : 'เสิร์ฟแล้ว'}
        </span>
      </td>
      <td>
        ${o.status === 'cooking'
          ? `<button type="button" class="action-btn" data-serve="${o.id}">กดเสิร์ฟ</button>`
          : `<span style="color:#64748b;font-size:.82rem;">สำเร็จ</span>`}
      </td>
    </tr>
  `).join('');

  tbody.querySelectorAll('[data-serve]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = orders.find(o => o.id === btn.dataset.serve);
      if (target) {
        target.status = 'served';
        renderOrders();
        showToast(`เสิร์ฟออเดอร์ ${target.id} เรียบร้อยแล้ว`);
      }
    });
  });
}

function showToast(msg) {
  const el = document.getElementById('toastMsg');
  el.textContent = msg;
  el.classList.add('is-shown');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove('is-shown'), 2600);
}

// Event Listeners
document.querySelectorAll('.period-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.period-tab').forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    currentPeriod = tab.dataset.period;
    renderDashboard();
  });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentFilter = btn.dataset.filter;
    renderOrders();
  });
});

document.getElementById('clearCartBtn').addEventListener('click', () => {
  cart = [];
  renderCart();
});

document.getElementById('submitOrderBtn').addEventListener('click', () => {
  if (cart.length === 0) return;
  const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
  const summary = cart.map(i => `${i.name} x${i.qty}`).join(', ');
  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} น.`;

  const billId = `#${nextBillNumber++}`;
  orders.unshift({
    id: billId,
    time: timeStr,
    table: orderType,
    items: summary,
    total,
    status: 'cooking'
  });

  // Update live dashboard metrics
  periodData.today.revenue += total;
  periodData.today.orders += 1;
  periodData.today.bars[periodData.today.bars.length - 1].value += total;

  cart.forEach(c => {
    const m = menuCatalog.find(x => x.id === c.id);
    if (m) m.sold += c.qty;
    const cat = periodData.today.categories.find(k => k.key === c.category);
    if (cat) cat.amount += c.qty * c.price;
  });

  cart = [];
  renderCart();
  renderDashboard();
  renderOrders();
  showToast(`บันทึกบิล ${billId} ยอด ${formatTHB(total)} เข้าแดชบอร์ดแล้ว!`);
});

// Mobile sidebar toggle
const sidebar = document.getElementById('sidebar');
document.getElementById('menuToggle').addEventListener('click', () => {
  sidebar.classList.toggle('is-open');
});
document.querySelectorAll('.sidebar__nav a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelectorAll('.sidebar__nav a').forEach(x => x.classList.remove('is-active'));
    a.classList.add('is-active');
    sidebar.classList.remove('is-open');
  });
});

// Initial render
renderPOSMenu();
renderDashboard();
renderOrders();

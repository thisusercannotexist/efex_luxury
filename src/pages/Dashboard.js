import { state } from '../state/store.js';

export const Dashboard = () => {
  const container = document.createElement('div');
  container.className = 'container';
  container.style.paddingTop = '2rem';
  container.style.paddingBottom = '4rem';

  // Profile Section
  const user = state.user;
  const profileSection = document.createElement('div');
  profileSection.style.marginBottom = '3rem';
  profileSection.style.paddingBottom = '2rem';
  profileSection.style.borderBottom = '1px solid var(--color-black-lighter)';
  
  profileSection.innerHTML = `
    <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--color-white);">Hello, ${user ? user.name : 'Guest'}</h2>
    <p style="color: var(--color-gray-400); margin-bottom: 2rem;">Manage your luxury experience.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
        <div class="card">
            <h4 style="color: var(--color-gold); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.5rem;">Member ID</h4>
            <p style="font-size: 1.1rem;">#EFX-${Math.floor(Math.random() * 10000)}</p>
        </div>
        <div class="card">
            <h4 style="color: var(--color-gold); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.5rem;">Contact</h4>
            <p style="font-size: 1.1rem;">${user.phone || 'N/A'}</p>
        </div>
        <div class="card">
             <h4 style="color: var(--color-gold); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.5rem;">Shipping Address</h4>
            <p style="font-size: 1.1rem;">${user.location || 'N/A'}</p>
        </div>
    </div>

    ${user.role === 'admin' ? `
      <div style="margin-top: 1.5rem; padding: 1.25rem 1.5rem; background: rgba(212, 175, 55, 0.1); border: 1px solid var(--color-gold); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 1rem;">
        <div>
          <h4 style="color: var(--color-gold); margin: 0 0 0.25rem 0;">👑 Store Administrator Access</h4>
          <p style="margin: 0; font-size: 0.85rem; color: var(--color-gray-300);">You have master privileges to manage products, view sales metrics, and fulfill orders.</p>
        </div>
        <a href="/admin" data-link class="btn btn-primary" style="padding: 0.6rem 1.25rem; font-size: 0.85rem;">Admin Console &rarr;</a>
      </div>
    ` : ''}
  `;

  if (user) {
    container.appendChild(profileSection);
  }

  // Orders Section
  const title = document.createElement('h3');
  title.innerText = 'Order History';
  title.style.marginBottom = '1.5rem';
  container.appendChild(title);

  const ordersList = document.createElement('div');
  
  const renderOrders = () => {
    if (state.orders.length === 0) {
      ordersList.innerHTML = '<p style="color: var(--color-gray-400);">No active orders placed yet.</p>';
      return;
    }

    ordersList.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${state.orders.map(order => `
          <div class="card" style="display: flex; flex-direction: row; justify-content: space-between; align-items: start; flex-wrap: wrap; gap: 1rem;">
            <div style="display: flex; flex-direction: column;">
              <p style="font-size: 0.8rem; color: var(--color-gray-400); margin-bottom: 0.2rem;">${order.date}</p>
              <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${order.id}</h3>
              
              <div style="display:flex; gap: 0.5rem; flex-wrap: wrap;">
                  ${order.items.map(item => {
                        // Handle legacy string items or new object items
                        if (typeof item === 'string') return `<span style="color: var(--color-gray-400);">${item}</span>`;
                        return `
                            <div style="position: relative; width: 50px; height: 50px; border-radius: 4px; overflow: hidden; border: 1px solid var(--color-black-lighter);">
                                <img src="${item.image}" alt="${item.name}" title="${item.qty}x ${item.name}" style="width: 100%; height: 100%; object-fit: cover;" />
                                <span style="position: absolute; bottom: 0; right: 0; background: var(--color-gold); color: black; font-size: 0.6rem; padding: 0 4px;">x${item.qty}</span>
                            </div>
                        `;
                  }).join('')}
              </div>

            </div>
            <div style="text-align: right;">
              <p style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--color-gold);">${order.total}</p>
              <span style="
                padding: 0.25rem 0.75rem; 
                border-radius: 999px; 
                font-size: 0.8rem; 
                text-transform: uppercase; 
                background: ${order.status === 'Paid' ? 'rgba(16, 185, 129, 0.1)' : order.status === 'Shipped' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)'}; 
                color: ${order.status === 'Paid' ? 'var(--color-success)' : order.status === 'Shipped' ? '#3B82F6' : 'var(--color-warning)'};
              ">
                ${order.status}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  };

  renderOrders();
  container.appendChild(ordersList);

  container.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href) {
        import('../main.js').then(m => m.navigate(href));
      }
    }
  });

  return container;
};

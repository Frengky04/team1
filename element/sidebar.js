export function renderSidebar(target) {
    if (!target) return;
    target.innerHTML = `
        <!-- 2. SIDEBAR (Light, Smart Filters, Pending Widget) -->
        <aside class="sidebar" id="sidebarNav">
            
            <!-- WRAPPER UNTUK AREA YANG BISA DI-SCROLL -->
            <div class="sidebar-scroll-wrapper">
                
                <!-- Smart Filters (4 Kotak Besar) -->
                <div class="smart-filters-grid">
                    <a href="#" class="filter-card">
                        <div class="filter-top"><div class="filter-icon" style="background-color: var(--dlg-blue);"><i class="bi bi-archive-fill"></i></div><div class="filter-count">429</div></div>
                        <div class="filter-label">Quest</div>
                    </a>
                    <a href="#" class="filter-card">
                        <div class="filter-top"><div class="filter-icon" style="background-color: var(--dlg-green);"><i class="bi bi-calendar-event-fill"></i></div><div class="filter-count" id="projectTasksTotalCount">0</div></div>
                        <div class="filter-label">Project</div>
                    </a>
                    <a href="#" class="filter-card">
                        <div class="filter-top"><div class="filter-icon bg-icon-orange"><i class="bi bi-flag-fill"></i></div><div class="filter-count">21</div></div>
                        <div class="filter-label">Files</div>
                    </a>
                    <a href="#" class="filter-card">
                        <div class="filter-top"><div class="filter-icon bg-icon-red"><i class="bi bi-calendar-check-fill"></i></div><div class="filter-count">30</div></div>
                        <div class="filter-label">Reminder</div>
                    </a>
                </div>

                <!-- Navigation Links -->
                <div class="nav-category">Main Navigation</div>
                <a href="#" class="sidebar-link active"><i class="bi bi-columns-gap"></i> Dashboard</a>
                <a href="#" class="sidebar-link"><i class="bi bi-list-columns-reverse"></i> Lineup <span class="sidebar-badge">4</span></a>
                <a href="#" class="sidebar-link"><i class="bi bi-chat-dots"></i> Pings</a>
                <a href="#" class="sidebar-link"><i class="bi bi-bell"></i> Hey!</a>
                <a href="#" class="sidebar-link"><i class="bi bi-activity"></i> Activity</a>
                <a href="#" class="sidebar-link"><i class="bi bi-person-circle"></i> My Stuff</a>

                <div class="nav-category mt-4">System</div>
                <a href="#" class="sidebar-link"><i class="bi bi-gear"></i> Settings</a>
                <a href="#" class="sidebar-link text-danger"><i class="bi bi-box-arrow-right"></i> Logout</a>

            </div> <!-- End Scroll Wrapper -->

            <!-- PENDING WIDGET (Pinned di Bawah, di luar scroll wrapper) -->
            <div class="pending-widget">
                <div class="fire-icon-wrapper"><i class="bi bi-fire fire-icon"></i></div>
                <h6 class="fw-bold" style="color:#0B2B6A; margin-bottom: 5px;">Pending Tasks</h6>
                <p class="small text-muted mb-3">You have 5 approvals waiting.</p>
                <button class="btn-review">Review Now</button>
                
                <!-- COPYRIGHT (Muncul hanya saat scroll mentok bawah) -->
                <div class="sidebar-copyright">
                    &copy; 2025 PT Dialogika Persona Indonesia
                </div>
            </div>

        </aside>
        `;
}

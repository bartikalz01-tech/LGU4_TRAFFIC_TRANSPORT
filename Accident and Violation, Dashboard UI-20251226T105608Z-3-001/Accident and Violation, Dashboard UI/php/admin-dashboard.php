<?php
/**
 * Barangay Traffic & Transport Management Dashboard
 * Redesigned to match the new template structure
 */

$pageTitle = 'Traffic Management Dashboard';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?> - Barangay (N/A)</title>
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="css/sidebar.css">
    <link rel="stylesheet" href="css/admin-header.css">
    <link rel="stylesheet" href="css/buttons.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/sidebar-footer.css">
    <link rel="stylesheet" href="css/admin-dashboard.css">
</head>
<body>
    <!-- Include Sidebar Component -->
    <?php include 'includes/sidebar-traffic-only.php'; ?>

    <!-- Include Admin Header Component -->
    <?php include 'includes/admin-header.php'; ?>
    
    <!-- ===================================
       MAIN CONTENT - Traffic Dashboard
       =================================== -->
    <div class="main-content">
        <div class="main-container">
            <div class="title">
                <nav class="breadcrumb" aria-label="Breadcrumb">
                    <ol class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <a href="/" class="breadcrumb-link">
                                <i class="fas fa-home"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="/dashboard" class="breadcrumb-link">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <i class="fas fa-traffic-light"></i>
                            <span>Traffic Management</span>
                        </li>
                    </ol>
                </nav>
                <h1>Barangay Traffic & Transport Management Dashboard</h1>
                <p>Monitor and manage traffic flow, incidents, and transportation systems in real-time. Get insights into traffic patterns, reported incidents, and system performance.</p>
            </div>
            
            <div class="sub-container">
                <div class="page-content">
                    <!-- Stats Cards -->
                    <div class="dashboard-stats">
                        <div class="stat-card">
                            <div class="stat-icon" style="background: rgba(52, 152, 219, 0.1); color: #3498db;">
                                <i class="fas fa-car"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-value">1,247</div>
                                <div class="stat-label">Vehicles Today</div>
                            </div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon" style="background: rgba(46, 204, 113, 0.1); color: #2ecc71;">
                                <i class="fas fa-traffic-light"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-value">24</div>
                                <div class="stat-label">Active Signals</div>
                            </div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon" style="background: rgba(231, 76, 60, 0.1); color: #e74c3c;">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-value">8</div>
                                <div class="stat-label">Incidents Today</div>
                            </div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon" style="background: rgba(243, 156, 18, 0.1); color: #f39c12;">
                                <i class="fas fa-ticket-alt"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-value">42</div>
                                <div class="stat-label">Violations Today</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Feature Grid -->
                    <div class="feature-grid">
                        <!-- Traffic Flow Monitoring -->
                        <div class="feature-card">
                            <div class="feature-header">
                                <i class="fas fa-video"></i>
                                <h3>Traffic Flow Monitoring</h3>
                            </div>
                            <div class="feature-body">
                                <p>Monitor real-time traffic flow through integrated CCTV systems and traffic sensors across major intersections.</p>
                                <div class="feature-actions">
                                    <button class="btn btn-primary">
                                        <i class="fas fa-play"></i> View Live
                                    </button>
                                    <button class="btn btn-secondary">
                                        <i class="fas fa-cog"></i> Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Road Condition Updates -->
                        <div class="feature-card">
                            <div class="feature-header">
                                <i class="fas fa-road"></i>
                                <h3>Road Condition Updates</h3>
                            </div>
                            <div class="feature-body">
                                <p>Update and monitor road conditions, closures, construction activities, and maintenance schedules.</p>
                                <div class="feature-actions">
                                    <button class="btn btn-primary">
                                        <i class="fas fa-edit"></i> Update Status
                                    </button>
                                    <button class="btn btn-secondary">
                                        <i class="fas fa-list"></i> View All
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Accident Reporting -->
                        <div class="feature-card">
                            <div class="feature-header">
                                <i class="fas fa-car-crash"></i>
                                <h3>Accident & Violation Reporting</h3>
                            </div>
                            <div class="feature-body">
                                <p>Report and track traffic accidents, violations, and incidents with real-time notifications and analytics.</p>
                                <div class="feature-actions">
                                    <button class="btn btn-primary">
                                        <i class="fas fa-plus"></i> New Report
                                    </button>
                                    <button class="btn btn-secondary">
                                        <i class="fas fa-chart-bar"></i> Analytics
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Vehicle Routing -->
                        <div class="feature-card">
                            <div class="feature-header">
                                <i class="fas fa-route"></i>
                                <h3>Vehicle Routing & Diversion</h3>
                            </div>
                            <div class="feature-body">
                                <p>Plan optimal routes and implement traffic diversions during peak hours, events, or incidents.</p>
                                <div class="feature-actions">
                                    <button class="btn btn-primary">
                                        <i class="fas fa-map-marked-alt"></i> Plan Route
                                    </button>
                                    <button class="btn btn-secondary">
                                        <i class="fas fa-download"></i> Export Data
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Traffic Signal Control -->
                        <div class="feature-card">
                            <div class="feature-header">
                                <i class="fas fa-traffic-light"></i>
                                <h3>Traffic Signal Control</h3>
                            </div>
                            <div class="feature-body">
                                <p>Manage and optimize traffic signal timing based on real-time traffic conditions and patterns.</p>
                                <div class="feature-actions">
                                    <button class="btn btn-primary">
                                        <i class="fas fa-sliders-h"></i> Adjust Signals
                                    </button>
                                    <button class="btn btn-secondary">
                                        <i class="fas fa-history"></i> View Logs
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Public Transport Coordination -->
                        <div class="feature-card">
                            <div class="feature-header">
                                <i class="fas fa-bus"></i>
                                <h3>Public Transport Coordination</h3>
                            </div>
                            <div class="feature-body">
                                <p>Coordinate with public transport operators and monitor transit schedules, routes, and capacity.</p>
                                <div class="feature-actions">
                                    <button class="btn btn-primary">
                                        <i class="fas fa-exchange-alt"></i> Coordinate
                                    </button>
                                    <button class="btn btn-secondary">
                                        <i class="fas fa-calendar"></i> Schedules
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Traffic Map -->
                    <div class="map-container">
                        <div class="map-header">
                            <h3><i class="fas fa-map-marked-alt"></i> Real-Time Traffic Map</h3>
                            <div>
                                <button class="btn btn-primary" style="padding: 0.375rem 0.75rem; font-size: 0.75rem;">
                                    <i class="fas fa-sync-alt"></i> Refresh Map
                                </button>
                            </div>
                        </div>
                        <div class="map-content">
                            <div>
                                <i class="fas fa-map-marked-alt" style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-secondary-1);"></i>
                                <h4 style="margin-bottom: 0.5rem; color: var(--text-color-1);">Interactive Traffic Map</h4>
                                <p style="color: var(--text-secondary-1); max-width: 400px; margin: 0 auto;">
                                    Showing real-time traffic conditions, incident locations, camera feeds, and road closures across the barangay.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Recent Activity -->
                    <div class="activity-section">
                        <div class="activity-header">
                            <h3><i class="fas fa-history"></i> Recent Activity</h3>
                        </div>
                        <div class="activity-list">
                            <div class="activity-item">
                                <div class="activity-icon">
                                    <i class="fas fa-car-crash"></i>
                                </div>
                                <div class="activity-info">
                                    <h4>Minor Accident Reported</h4>
                                    <p>Vehicle collision at Main Street - Barangay Road intersection</p>
                                </div>
                                <div class="activity-time">10:15 AM</div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-icon">
                                    <i class="fas fa-traffic-light"></i>
                                </div>
                                <div class="activity-info">
                                    <h4>Signal Malfunction Detected</h4>
                                    <p>Traffic light at Market Road intersection not functioning properly</p>
                                </div>
                                <div class="activity-time">09:45 AM</div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-icon">
                                    <i class="fas fa-road"></i>
                                </div>
                                <div class="activity-info">
                                    <h4>Scheduled Road Maintenance</h4>
                                    <p>Road closure for maintenance on Highway 456 until 5:00 PM</p>
                                </div>
                                <div class="activity-time">08:30 AM</div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-icon">
                                    <i class="fas fa-car"></i>
                                </div>
                                <div class="activity-info">
                                    <h4>Traffic Diversion Activated</h4>
                                    <p>Alternative route implemented due to ongoing construction</p>
                                </div>
                                <div class="activity-time">07:45 AM</div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-icon">
                                    <i class="fas fa-exclamation-circle"></i>
                                </div>
                                <div class="activity-info">
                                    <h4>Heavy Traffic Alert</h4>
                                    <p>Heavy traffic detected on Bridge Approach Road during rush hour</p>
                                </div>
                                <div class="activity-time">07:15 AM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Include Admin Footer Component -->
        <?php include 'includes/admin-footer.php'; ?>
    </div>

    <script>
        // Custom dashboard functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Update sidebar active state for traffic management
            const sidebarLinks = document.querySelectorAll('.sidebar-link');
            sidebarLinks.forEach(link => {
                if (link.textContent.includes('Dashboard')) {
                    link.classList.add('active');
                }
            });
            
            // Refresh map button functionality
            const refreshBtn = document.querySelector('.btn-primary i.fa-sync-alt')?.closest('.btn');
            if (refreshBtn) {
                refreshBtn.addEventListener('click', function() {
                    this.querySelector('i').classList.add('fa-spin');
                    setTimeout(() => {
                        this.querySelector('i').classList.remove('fa-spin');
                        // Show notification
                        const notification = document.createElement('div');
                        notification.style.cssText = `
                            position: fixed;
                            bottom: 20px;
                            right: 20px;
                            background: var(--primary-color-1);
                            color: white;
                            padding: 10px 15px;
                            border-radius: 6px;
                            z-index: 1000;
                            font-size: 0.875rem;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                        `;
                        notification.textContent = 'Traffic map updated successfully';
                        document.body.appendChild(notification);
                        setTimeout(() => notification.remove(), 3000);
                    }, 1000);
                });
            }
            
            // Feature card button interactions
            const featureButtons = document.querySelectorAll('.feature-actions .btn');
            featureButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const action = this.textContent.trim();
                    console.log(`Action: ${action} clicked`);
                    // Add your specific functionality here
                });
            });
            
            // Simulate real-time updates for stats
            function updateStats() {
                const stats = document.querySelectorAll('.stat-value');
                if (stats.length > 0) {
                    // This is where you would fetch real data from your API
                    // For demo purposes, we'll just add small random fluctuations
                    stats.forEach(stat => {
                        const current = parseInt(stat.textContent.replace(/,/g, ''));
                        const change = Math.floor(Math.random() * 10) - 2; // -2 to +7
                        const newValue = Math.max(0, current + change);
                        stat.textContent = newValue.toLocaleString();
                    });
                }
            }
            
            // Update stats every 30 seconds
            setInterval(updateStats, 30000);
            
            // Add click handlers for activity items
            const activityItems = document.querySelectorAll('.activity-item');
            activityItems.forEach(item => {
                item.addEventListener('click', function() {
                    const title = this.querySelector('h4').textContent;
                    console.log(`Viewing details for: ${title}`);
                    // Add your modal or detail view logic here
                });
            });
        });
    </script>
</body>
</html>

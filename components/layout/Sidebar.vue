<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <nuxt-link to="/" class="nav-link" :class="{active : $route.path == '/'}" aria-current="page">
                        <i class="bi bi-grid me-2"></i>
                        داشبورد
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link :class="{active : $route.path.includes('/users')}" class="nav-link" to="/users">
                        <i class="bi bi-people me-2"></i>
                        کاربران
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link :class="{active : $route.path.includes('/products')}" class="nav-link" to="/products">
                        <i class="bi bi-box-seam me-2"></i>
                        محصولات
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/categories" class="nav-link" :class="{active : $route.path.includes('/categories')}" >
                        <i class="bi bi-grid-3x3-gap me-2"></i>
                        دسته بندی
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/orders" class="nav-link" :class="{ active: $route.path.includes('/orders') }">
                        <i class="bi bi-basket me-2"></i>
                        سفارشات
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" :class="{ active: $route.path.includes('/transactions') }" to="/transactions">
                        <i class="bi bi-currency-dollar me-2"></i>
                        تراکنش ها
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/coupons" class="nav-link" :class="{ active: $route.path.includes('/coupons') }">
                        <i class="bi bi-percent me-2"></i>
                        تخفیف ها
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
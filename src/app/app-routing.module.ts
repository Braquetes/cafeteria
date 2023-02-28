import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./auth/recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./auth/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'restore',
    loadChildren: () => import('./auth/restore/restore.module').then( m => m.RestorePageModule)
  },
  {
    path: 'pedido-form/:id',
    loadChildren: () => import('./client/pedido-form/pedido-form.module').then( m => m.PedidoFormPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./client/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('./client/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'terminado/:id',
    loadChildren: () => import('./client/terminado/terminado.module').then( m => m.TerminadoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

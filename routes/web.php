<?php
  
  use App\Http\Controllers\AthleteController;
  use App\Http\Controllers\BarangController;
  use App\Http\Controllers\CoachController;
  use App\Http\Controllers\ExerciseController;
  use App\Http\Controllers\ProfileController;
  use App\Http\Controllers\TournamentController;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;
  
  Route::fallback(fn() => to_route(auth()->check() ? 'dashboard' : 'login'));
  
  Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
//      $authedUser = Auth::user();
//      $authedUser->avatar = str_contains($authedUser->avatar, 'https') ? $authedUser->avatar : ($authedUser->avatar ? asset('storage/' . $authedUser->avatar) : null);
      
      return Inertia::render('Dashboard', [
        'meta' => session('meta'),
//        'auth' => ['user' => $authedUser]
      ]);
    })->name('dashboard');
    
    Route::get('/barang', [BarangController::class, 'index'])->name('barang.index');
    Route::get('/barang/create', [BarangController::class, 'create'])->name('barang.create');
    Route::post('/barang/store', [BarangController::class, 'store'])->name('barang.store');
    
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  });
  
  require __DIR__ . '/auth.php';

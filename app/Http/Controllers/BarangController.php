<?php
  
  namespace App\Http\Controllers;
  
  use App\Models\Barang;
  use Illuminate\Http\Request;
  use Inertia\Inertia;
  
  class BarangController extends Controller
  {
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Barang/index', [
        'items' => Barang::all()
      ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      Barang::create([
        'code' => $request['code'],
        'name' => $request['name'],
        'quantity' => intval($request['quantity']),
        'unit' => $request['unit'],
      ]);
      
      return to_route('barang.index');
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Barang/create');
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Barang $barang)
    {
      //
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Barang $barang)
    {
      return Inertia::render('Barang/edit', [
        'barang' => $barang
      ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Barang $request, Barang $barang)
    {
      Barang::update([
        'code' => $request['code'],
        'name' => $request['name'],
        'quantity' => intval($request['quantity']),
        'unit' => $request['unit'],
      ]);
      
      return to_route('barang.index');
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barang $barang)
    {
      $barang->delete();
      
      return to_route('barang.index');
    }
  }

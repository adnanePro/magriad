<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class createTable extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:table {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create new table';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
       $name = strtolower($this->arguments()['name']);
       $this->call("make:migration", ['name' => $name,'--create'=> $name]);
       $name  = ucfirst($name);
       $this->call("make:model", ['name' => $name]);
       if ($this->confirm('Do you want to generate a controller ?',true)) {
       $this->call("make:controller", ['name' => $name."Controller" ]);
        
    }


    }
}

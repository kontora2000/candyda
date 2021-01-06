<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    use Sluggable;

    protected $table_name = 'tags';

    protected $fillable = [
      'name',
      'slug',
    ];

    // public function posts($post_id) {
    //   Tags::where('')
    // }
    
    public function getRouteKeyName()
    {
      return 'slug';
    }

    public function posts() {
      return $this->belongsToMany(Post::class, 'post_tags');
    }

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}

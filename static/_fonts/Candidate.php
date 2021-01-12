<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Image;
use App\Models\Party;

class Candidate extends Model
{
    use Sluggable;

    protected $table = 'candidates';
    protected $fillable = [
        'id',
        'name',
        'party_id',
        'image_id',
        'gallery_id',
        'description',
        'ava',
        'status_id',
        'gallery'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function avatar()
    {
        return $this->belongsTo(Image::class, 'image_id');
    }

    public function party()
    {
        return $this->belongsTo(Party::class, 'party_id');
    }

    public function status()
    {
        return $this->belongsTo(Status::class, 'status_id');
    }
}



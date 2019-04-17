<?php

namespace App\GraphQL\Query;

use GraphQL;
use App\User;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class UserByIdQuery extends Query
{
    protected $attributes = [
        'name' => 'userById'
    ];

    public function type()
    {
        return GraphQL::type('User');
    }

    public function args()
    {
        return [
            'id' => [
                'name' => 'id'
            ],
        ];
    }

    public function resolve($root, $args)
    {
        if (!$user = User::find($args['id'])) {
            throw new \Exception('Resource not found');
        }

        return $user;
    }
}

{
  'target': [
    {
      'target_name': 'hello',
      'source': [
        'hello.cc'
      ],
      'conditions': [
        ['OS == "win"',
        {
          'libraries': ['-lnode.lib']
        }
        ]
      ]
    }
  ]
}
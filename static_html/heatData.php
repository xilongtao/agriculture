<?php
header('Content-Type =>application/json');
header('access-control-allow-origin:*');
$data = [
    [
        [
          "coord" => [
            120.14322240845,
            30.236064370321
          ],
          "elevation" => 21
        ],
        [
          "coord" => [
            120.14280555506,
            30.23633761213
          ],
          "elevation" => 5
        ],
        [
          "coord" => [
            120.14307598649,
            30.236125905084
          ],
          "elevation" => 30.7
        ],
    ]
];
echo json_encode($data);
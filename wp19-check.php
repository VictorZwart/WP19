<?php
$wp_list = Array(
    'Week 1' => 'Assignment 1',
    'Week 2' => 'No lecture',
    'Week 3' => 'Assignment 2',
    'Week 4' => '-',
    'Week 5' => 'Assignment 3',
    'Week 6' => '-',
    'Week 7' => 'Guest Lecture');
foreach ($wp_listas$week => $content) {
    echosprintf("%7s | %15s<br>", $week, $content);
} ?>

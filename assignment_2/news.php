<?php /* Header */
$page_title = 'Webprogramming Assignment 2 News';
$java_script = '../js/main.js';
$navigation = Array('active' => 'News',
    'items' => Array(
        'Home' => '/~s3746186/WP19/assignment_2/index.php',
        'Links' => '/~s3746186/WP19/assignment_2/links.php',
        'News' => '/~s3746186/WP19/assignment_2/news.php',
        'Future' => '/~s3746186/WP19/assignment_2/future.php',));
include __DIR__ . '/tpl/head.php';
/* Body */
include __DIR__ . '/tpl/body-start.php'; ?>
<div class="col-md-12">
    <h1>Here you can find the latest news about stuff</h1>
</div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>


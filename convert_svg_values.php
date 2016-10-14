<?php

$absolute_path = "5.8359375 3.59667969 6.62695312 55.9121094 9.25292969 62.2558594 21.484375 62.2558594 24.6855469 55.9121094 24.6855469 49.918457 38.7294922 17.1308594 38.7294922 3.35449219";

function regex_callback($matches) {
    static $count = -1;
    $count++;
    $width = 44;
    $height = 63;
    if($count % 2) {
        return $matches[0] / $height;
    } else {
        return $matches[0] / $width;
    }
}

$relative_path = preg_replace_callback('(\d+(\.\d+)?)', 'regex_callback', $absolute_path);
echo $relative_path;

<?php
function goodEngineer($value)
{
  $lowerValue = strtolower($value);
  return $lowerValue === "php";
}

$file = "d:\REFA\GITHUB\no-3\index.html"
$lines = Get-Content $file
$newLines = $lines[0..540] + $lines[736..($lines.Count - 1)]
$newLines | Set-Content $file -Encoding UTF8

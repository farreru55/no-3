# Read the HTML file
$htmlPath = "index.html"
$content = Get-Content $htmlPath -Raw -Encoding UTF8

# Update line that has "btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder scale-up-hover" for Visi & Misi
# Change it to match Program Kerja button style
$content = $content -replace 'btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder scale-up-hover"\s+href="#visi-misi"', 'btn btn-lg px-5 py-3 fs-6 fw-bolder scale-up-hover bg-gradient-primary-to-secondary text-white border-0" href="#visi-misi"'

#Change the "Check out our CV" button section including the FAQ link
$oldPattern = '<a class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder glowing-btn-hover glowing-continuously rounded-pill"\s+href="cv.html"><i class="bi bi-file-earmark-person me-2"></i>Check out our\s+CV!</a>'

$newContent = @'
<div class="d-grid gap-2 mb-2">
                                <a class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder btn-pulsating-purple"
                                    href="cv.html"><i class="bi bi-file-earmark-person me-2"></i>Check out our
                                    CV!</a>
                            </div>
                            <div class="text-center text-xxl-start">
                                <a href="#faq" class="text-decoration-underline text-dark small" style="font-size: 0.875rem;">FAQ</a>
                            </div>
'@

$content = $content -replace $oldPattern, $newContent

# Write the updated content back
$content | Set-Content $htmlPath -Encoding UTF8 -NoNewline

Write-Host "HTML file updated successfully!"

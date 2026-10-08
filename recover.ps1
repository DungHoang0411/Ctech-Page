$logPath = 'C:\Users\Admin\.gemini\antigravity\brain\9d0a7621-1604-4a64-9cd1-52e313521046\.system_generated\logs\transcript_full.jsonl'
$bestHtml = ""

foreach ($line in Get-Content $logPath -Encoding UTF8) {
    try {
        $json = $line | ConvertFrom-Json
        if ($json.content) {
            if ($json.content -match '<section class="schedule-offers">' -and $json.content -match '<footer class="footer">') {
                $bestHtml = $json.content
            }
        }
    } catch {}
}

Set-Content "d:\CUT\recovered_index.txt" $bestHtml -Encoding UTF8

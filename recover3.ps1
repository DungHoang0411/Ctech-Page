$logPath = 'C:\Users\Admin\.gemini\antigravity\brain\9d0a7621-1604-4a64-9cd1-52e313521046\.system_generated\logs\transcript_full.jsonl'
$bestHtml = ""

foreach ($line in Get-Content $logPath -Encoding UTF8) {
    try {
        $json = $line | ConvertFrom-Json
        if ($json.tool_calls) {
            foreach ($call in $json.tool_calls) {
                if ($call.function.name -eq 'default_api:write_to_file') {
                    if ($call.function.arguments.TargetFile -match 'index\.html') {
                        if ($call.function.arguments.CodeContent -match '<section class="schedule-offers">') {
                            $bestHtml = $call.function.arguments.CodeContent
                        }
                    }
                }
            }
        }
    } catch {}
}

Set-Content "d:\CUT\recovered_html.txt" $bestHtml -Encoding UTF8

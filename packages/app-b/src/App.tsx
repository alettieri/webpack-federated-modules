import React from 'react'
import Button from 'app_a/Button'

const Panel = React.lazy(() => import('app_a/Panel'))

const App = () => {
    const [showPanel, updatePanel] = React.useState(false)

    return (<>
        <h1>Hello From App B</h1>
            <Button onClick={() => updatePanel(true)}>B Button is great</Button> {`⬅ came from App A`}
            {
                showPanel && <React.Suspense fallback={null}><Panel><p>but I'm visible in App B</p></Panel></React.Suspense>
            }
    </>)
}

export default App
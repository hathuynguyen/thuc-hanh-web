import * as React from "react"

const MyFeature = Reacrt.lazy(() =>
    Promise.all([
        import("./MyFeature"),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        }),
    ]).then(([m]) => m)
);

function Mypage(){
    return (
        <>
            <h1>My Page </h1>
            <MyFeature/>        
        </>
    );
}

export default Mypage;
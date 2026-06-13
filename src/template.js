export const welcomPage = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Welcome</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Inter, sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f8fafc;
    padding:20px;
}

.container{
    max-width:700px;
    width:100%;
    background:#ffffff;
    border-radius:24px;
    padding:50px;
    text-align:center;
    box-shadow:
        0 10px 30px rgba(0,0,0,0.08),
        0 2px 10px rgba(0,0,0,0.04);
}

.logo{
    width:70px;
    height:70px;
    margin:0 auto 25px;
    border-radius:20px;
    background:linear-gradient(
        135deg,
        #4f46e5,
        #7c3aed
    );
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:28px;
    font-weight:bold;
}

h1{
    font-size:42px;
    color:#0f172a;
    margin-bottom:15px;
}

p{
    color:#64748b;
    line-height:1.8;
    font-size:17px;
    margin-bottom:35px;
}

.buttons{
    display:flex;
    justify-content:center;
    gap:15px;
    flex-wrap:wrap;
}

.btn{
    text-decoration:none;
    padding:14px 28px;
    border-radius:12px;
    font-weight:600;
    transition:0.3s;
}

.primary{
    background:#4f46e5;
    color:white;
}

.primary:hover{
    background:#4338ca;
}

.secondary{
    border:1px solid #cbd5e1;
    color:#334155;
}

.secondary:hover{
    background:#f1f5f9;
}

.footer{
    margin-top:40px;
    color:#94a3b8;
    font-size:14px;
}
</style>
</head>

<body>

<div class="container">
    <div class="logo">🚀</div>

    <h1>Welcome!</h1>

    <p>
        Thank you for visiting our platform.
        We're excited to have you here. Explore our services,
        discover new features, and enjoy a seamless experience.
    </p>

    <div class="buttons">
        <a href="#" class="btn primary">
            Get Started
        </a>

        <a href="#" class="btn secondary">
            Learn More
        </a>
    </div>

    <div class="footer">
        © 2026 Your Company. All rights reserved.
    </div>
</div>

</body>
</html>
`
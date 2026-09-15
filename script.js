

}

.hero 
   .photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
  background: #fff;
}

.orbit {
  position: absolute;
  width: 450px;
  height: 450px;
  border: 1px dashed rgba(103,232,249,.25);
  border-radius: 50%;
  animation: spin 18s linear infinite;
}

.float-card {
  position: absolute;
  z-index: 3;
  padding: 11px 15px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--panel);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
  font-size: .85rem;
  font-weight: 700;
}

.f1 {
  top: 18%;
  left: 4%;
}

.f2 {
  right: 2%;
  bottom: 18%;
}

.section {
  max-width: 1200px;
  margin: auto;
  padding: 100px 6%;
}

.heading {
  margin-bottom: 40px;
}


export async function addToCart(variantId, quantity = 1) {
  const response = await fetch("/cart/add.js", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ id: variantId, quantity }] })
  });
  if (!response.ok) throw new Error("Cart add failed");
  return response.json();
}

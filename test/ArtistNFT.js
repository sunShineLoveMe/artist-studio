const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("ArtistNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployNftFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const ArtistNFT = await ethers.getContractFactory("ArtistNFT");
    const artistNFT = await ArtistNFT.deploy();

    return { artistNFT, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { artistNFT, owner, otherAccount } = await loadFixture(deployNftFixture);
      const addr = await owner.getAddress();
      await artistNFT.mint(addr, "https://www.baidu.com")
      expect(await artistNFT.tokenURI(0)).to.equal("https://www.baidu.com");
    });

  });

});
